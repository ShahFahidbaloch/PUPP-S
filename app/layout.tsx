import type { Metadata } from "next";
import { Londrina_Solid, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Londrina_Solid({
  variable: "--font-lilita",
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUPP'S — Grooming, Training & Pet Care",
  description:
    "Training, grooming to nutrition & exercise — caring pet services that become family.",
};

const EXTENSION_CLEANUP_SCRIPT = `
(function() {
  try {
    var isExtAttr = function(name) {
      return typeof name === 'string' && (
        name.indexOf('bis_') === 0 ||
        name.indexOf('__processed_') === 0 ||
        name.indexOf('data-bis') === 0
      );
    };
    var origSetAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, value) {
      if (isExtAttr(name)) return;
      return origSetAttr.call(this, name, value);
    };
    var cleanNode = function(el) {
      if (!el || !el.attributes) return;
      for (var i = el.attributes.length - 1; i >= 0; i--) {
        var attr = el.attributes[i].name;
        if (isExtAttr(attr)) el.removeAttribute(attr);
      }
    };
    var cleanTree = function(root) {
      if (!root) return;
      cleanNode(root);
      if (root.querySelectorAll) {
        var all = root.querySelectorAll('[bis_skin_checked],[bis_register]');
        for (var i = 0; i < all.length; i++) cleanNode(all[i]);
      }
    };
    cleanTree(document.documentElement);
    var obs = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'attributes' && isExtAttr(m.attributeName)) {
          m.target.removeAttribute(m.attributeName);
        } else if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var n = m.addedNodes[j];
            if (n.nodeType === 1) cleanTree(n);
          }
        }
      }
    });
    obs.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${sansFont.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: EXTENSION_CLEANUP_SCRIPT }} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col antialiased selection:bg-[#FFEB2A] selection:text-[#111111]"
      >
        {children}
      </body>
    </html>
  );
}
