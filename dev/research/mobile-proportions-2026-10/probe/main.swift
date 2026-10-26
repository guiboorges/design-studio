import UIKit
import SwiftUI

func log(_ s: String) { print("PROBE " + s); fflush(stdout) }

struct SizeReader: View {
    let label: String
    let content: AnyView
    var body: some View {
        content.background(GeometryReader { g in
            Color.clear.onAppear { log("SWIFTUI \(label) w=\(g.size.width) h=\(g.size.height)") }
        })
    }
}

struct ButtonsView: View {
    let sizes: [(String, ControlSize)] = [("mini", .mini), ("small", .small), ("regular", .regular), ("large", .large), ("extraLarge", .extraLarge)]
    var body: some View {
        ScrollView {
            VStack(spacing: 4) {
                ForEach(0..<sizes.count, id: \.self) { i in
                    let (n, s) = sizes[i]
                    SizeReader(label: "borderedProminent.\(n)", content: AnyView(Button("Continue") {}.buttonStyle(.borderedProminent).controlSize(s)))
                    SizeReader(label: "bordered.\(n)", content: AnyView(Button("Continue") {}.buttonStyle(.bordered).controlSize(s)))
                    SizeReader(label: "glassProminent.\(n)", content: AnyView(Button("Continue") {}.buttonStyle(.glassProminent).controlSize(s)))
                    SizeReader(label: "glass.\(n)", content: AnyView(Button("Continue") {}.buttonStyle(.glass).controlSize(s)))
                    SizeReader(label: "borderedProminent.flexible.\(n)", content: AnyView(Button("Continue") {}.buttonStyle(.borderedProminent).controlSize(s).buttonSizing(.flexible)))
                }
                SizeReader(label: "textfield.roundedBorder", content: AnyView(TextField("Email", text: .constant("")).textFieldStyle(.roundedBorder)))
                SizeReader(label: "toggle", content: AnyView(Toggle("Wi-Fi", isOn: .constant(true))))
                SizeReader(label: "picker.segmented", content: AnyView(Picker("", selection: .constant(0)) { Text("A").tag(0); Text("B").tag(1) }.pickerStyle(.segmented)))
            }.padding()
        }
    }
}

struct ListView: View {
    var body: some View {
        NavigationStack {
            List {
                Section("Section") {
                    SizeReader(label: "list.insetGrouped.row.text", content: AnyView(Text("Row")))
                    Text("Row 2")
                }
            }
            .listStyle(.insetGrouped)
            .navigationTitle("Large Title")
            .background(GeometryReader { g in Color.clear.onAppear { log("SWIFTUI list.safeArea top=\(g.safeAreaInsets.top) bottom=\(g.safeAreaInsets.bottom) w=\(g.size.width)") } })
        }
    }
}

class RowsVC: UITableViewController {
    override func numberOfSections(in tableView: UITableView) -> Int { 2 }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { 3 }
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? { "Header" }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let styles: [UITableViewCell.CellStyle] = [.default, .subtitle, .value1]
        let c = UITableViewCell(style: styles[indexPath.row], reuseIdentifier: nil)
        var cfg = c.defaultContentConfiguration(); cfg.text = "Title"
        if indexPath.row == 1 { cfg.secondaryText = "Subtitle" }
        if indexPath.row == 0 { cfg.image = UIImage(systemName: "wifi") }
        c.contentConfiguration = cfg
        c.accessoryType = .disclosureIndicator
        return c
    }
}

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool { true }
    func application(_ application: UIApplication, configurationForConnecting s: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        let c = UISceneConfiguration(name: nil, sessionRole: s.role); c.delegateClass = SceneDelegate.self; return c
    }
}

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let ws = scene as? UIWindowScene else { return }
        _ = setup(ws)
    }
    func setup(_ ws: UIWindowScene) -> Bool {
        let w = UIWindow(windowScene: ws)
        window = w
        let mode = ProcessInfo.processInfo.environment["SIMCTL_CHILD_PROBE_MODE"] ?? ProcessInfo.processInfo.environment["PROBE_MODE"] ?? "uikit"
        let scr = ws.screen
        log("SCREEN bounds=\(scr.bounds.size) scale=\(scr.scale) nativeScale=\(scr.nativeScale) native=\(scr.nativeBounds.size) model=\(UIDevice.current.model) sys=\(UIDevice.current.systemVersion) mode=\(mode)")
        if mode == "swiftui" {
            w.rootViewController = UIHostingController(rootView: ButtonsView())
        } else if mode == "list" {
            w.rootViewController = UIHostingController(rootView: ListView())
        } else {
            // UIKit: tab bar + nav controller with large title + inset grouped table
            let table = RowsVC(style: .insetGrouped)
            table.title = "Large Title"
            table.navigationItem.largeTitleDisplayMode = .always
            let nav = UINavigationController(rootViewController: table)
            nav.navigationBar.prefersLargeTitles = true
            let plain = UIViewController(); plain.view.backgroundColor = .systemBackground; plain.title = "Plain"
            let nav2 = UINavigationController(rootViewController: plain)
            let tabs = UITabBarController()
            table.tabBarItem = UITabBarItem(title: "Home", image: UIImage(systemName: "house"), tag: 0)
            nav2.tabBarItem = UITabBarItem(title: "Plain", image: UIImage(systemName: "square"), tag: 1)
            tabs.viewControllers = [nav, nav2]
            w.rootViewController = tabs
            w.makeKeyAndVisible()
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
                let v = table.view!
                log("UIKIT table.layoutMargins=\(v.layoutMargins) directional=\(v.directionalLayoutMargins) sysMin=\(table.systemMinimumLayoutMargins) safe=\(v.safeAreaInsets)")
                log("UIKIT table.readableWidth=\(v.readableContentGuide.layoutFrame.width) readableX=\(v.readableContentGuide.layoutFrame.minX) viewW=\(v.bounds.width)")
                log("UIKIT tableView.rowHeight=\(table.tableView.rowHeight) estimated=\(table.tableView.estimatedRowHeight) sectionHeaderTopPadding=\(table.tableView.sectionHeaderTopPadding)")
                let cell = UITableViewCell(style: .default, reuseIdentifier: nil)
                var cfg = cell.defaultContentConfiguration(); cfg.text = "Row"; cell.contentConfiguration = cfg
                let fit = cell.systemLayoutSizeFitting(CGSize(width: v.bounds.width - 32, height: 0), withHorizontalFittingPriority: .required, verticalFittingPriority: .fittingSizeLevel)
                log("UIKIT cell.default.fittingHeight=\(fit.height)")
                let cell2 = UITableViewCell(style: .subtitle, reuseIdentifier: nil)
                var c2 = cell2.defaultContentConfiguration(); c2.text = "Title"; c2.secondaryText = "Subtitle"; cell2.contentConfiguration = c2
                let fit2 = cell2.systemLayoutSizeFitting(CGSize(width: v.bounds.width - 32, height: 0), withHorizontalFittingPriority: .required, verticalFittingPriority: .fittingSizeLevel)
                log("UIKIT cell.subtitle.fittingHeight=\(fit2.height)")
                log("UIKIT navBar.frame=\(nav.navigationBar.frame) (large title expanded)")
                log("UIKIT tabBar.frame=\(tabs.tabBar.frame) screenH=\(ws.screen.bounds.height)")
                plain.loadViewIfNeeded()
                log("UIKIT window.safe=\(w.safeAreaInsets)")
                for ip in [IndexPath(row:0,section:0),IndexPath(row:1,section:0),IndexPath(row:2,section:0)] { if let c = table.tableView.cellForRow(at: ip) { log("UIKIT row\(ip.row) frame=\(c.frame) contentX=\(c.contentView.frame.minX) sepInset=\(c.separatorInset)") } }
                log("UIKIT section0 header rect=\(table.tableView.rectForHeader(inSection: 0)) section1 header rect=\(table.tableView.rectForHeader(inSection: 1)) footer0=\(table.tableView.rectForFooter(inSection: 0))")
                let tmp = UIViewController(); nav2.pushViewController(tmp, animated: false); tabs.selectedIndex = 1
                DispatchQueue.main.async { log("UIKIT plainVC rootView.layoutMargins=\(tmp.view.layoutMargins) sysMin=\(tmp.systemMinimumLayoutMargins) readable=\(tmp.view.readableContentGuide.layoutFrame.width)") }
                // UIButton configurations
                let styles: [(String, UIButton.Configuration)] = [("filled", .filled()), ("tinted", .tinted()), ("gray", .gray()), ("prominentGlass", .prominentGlass()), ("glass", .glass())]
                let sizes: [(String, UIButton.Configuration.Size)] = [("mini", .mini), ("small", .small), ("medium", .medium), ("large", .large)]
                for (sn, base) in styles {
                    for (zn, z) in sizes {
                        var c = base; c.title = "Continue"; c.buttonSize = z
                        let b = UIButton(configuration: c)
                        let s = b.systemLayoutSizeFitting(UIView.layoutFittingCompressedSize)
                        log("UIKIT UIButton.\(sn).\(zn) w=\(s.width) h=\(s.height)")
                    }
                }
                // Corner radius of sheet-like/cornerConfiguration not probed
                // Switch, segmented, text field
                log("UIKIT UISwitch=\(UISwitch().intrinsicContentSize) UISegmented=\(UISegmentedControl(items: ["A","B"]).intrinsicContentSize) UISlider=\(UISlider().intrinsicContentSize)")
                let tf = UITextField(); tf.borderStyle = .roundedRect; tf.text = "x"
                log("UIKIT UITextField.roundedRect=\(tf.intrinsicContentSize)")
                let sb = UISearchBar(); log("UIKIT UISearchBar=\(sb.sizeThatFits(CGSize(width: 400, height: 200)))")
                // Text styles
                for (n, st) in [("largeTitle", UIFont.TextStyle.largeTitle), ("title1", .title1), ("title2", .title2), ("title3", .title3), ("headline", .headline), ("body", .body), ("callout", .callout), ("subheadline", .subheadline), ("footnote", .footnote), ("caption1", .caption1), ("caption2", .caption2)] {
                    let f = UIFont.preferredFont(forTextStyle: st)
                    log("TYPE \(n) size=\(f.pointSize) lineHeight=\(f.lineHeight) weight=\(f.fontDescriptor.object(forKey: .traits) ?? "")")
                }
                // scroll to collapse large title
                table.tableView.setContentOffset(CGPoint(x: 0, y: 400), animated: false)
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                    log("UIKIT navBar.frame(collapsed)=\(nav.navigationBar.frame) safeTop=\(table.view.safeAreaInsets.top)")
                    log("DONE")
                }
            }
            return true
        }
        w.makeKeyAndVisible()
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) { log("DONE") }
        return true
    }
}
