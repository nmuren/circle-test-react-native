(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1010:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(i),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return i?n.a.createElement(m,l(l({ref:t},s),{},{components:i})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},477:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var a=i(2),n=i(7),r=(i(0),i(1010)),o={id:"pixelratio",title:"PixelRatio"},l={unversionedId:"pixelratio",id:"version-0.63/pixelratio",isDocsHomePage:!1,title:"PixelRatio",description:"PixelRatio gives you access to the device's pixel density and font scale.",source:"@site/versioned_docs/version-0.63/pixelratio.md",slug:"/pixelratio",permalink:"/docs/pixelratio",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/pixelratio.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"PanResponder",permalink:"/docs/panresponder"},next:{title:"Platform",permalink:"/docs/platform"}},c=[{value:"Fetching a correctly sized image",id:"fetching-a-correctly-sized-image",children:[]},{value:"Pixel grid snapping",id:"pixel-grid-snapping",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>getFontScale()</code>",id:"getfontscale",children:[]},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",children:[]},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio")," gives you access to the device's pixel density and font scale."),Object(r.b)("h2",{id:"fetching-a-correctly-sized-image"},"Fetching a correctly sized image"),Object(r.b)("p",null,"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"var image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100)\n});\n<Image source={image} style={{ width: 200, height: 100 }} />;\n")),Object(r.b)("h2",{id:"pixel-grid-snapping"},"Pixel grid snapping"),Object(r.b)("p",null,"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd7960 for iPhone 4 or 750\xd71334 for iPhone 6. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."),Object(r.b)("p",null,"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."),Object(r.b)("p",null,"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."),Object(r.b)("p",null,"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PixelRatio Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Image%2C%20PixelRatio%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20TextInput%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20size%20%3D%2050%3B%0Aconst%20cat%20%3D%20%7B%0A%20%20uri%3A%20%22https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png%22%2C%0A%20%20width%3A%20size%2C%0A%20%20height%3A%20size%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CScrollView%20style%3D%7Bstyles.scrollContainer%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Pixel%20Ratio%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.get()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Font%20Scale%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.getFontScale()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOn%20this%20device%20images%20with%20a%20layout%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bsize%7D%20px%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%20source%3D%7Bcat%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3Erequire%20images%20with%20a%20pixel%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BPixelRatio.getPixelSizeForLayoutSize(size)%7D%20px%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7Bcat%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FScrollView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20scrollContainer%3A%20%7B%0A%20%20%20%20flext%3A%201%2C%0A%20%20%20%20marginTop%3A%20%222em%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20marginBottom%3A%2012%2C%0A%20%20%20%20marginTop%3A%204%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static get()\n")),Object(r.b)("p",null,"Returns the device pixel density. Some examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"mdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"hdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 2"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone SE, 6S, 7, 8"),Object(r.b)("li",{parentName:"ul"},"iPhone XR"),Object(r.b)("li",{parentName:"ul"},"iPhone 11"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone 6S Plus, 7 Plus, 8 Plus"),Object(r.b)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),Object(r.b)("li",{parentName:"ul"},"iPhone 11 Pro, 11 Pro Max"),Object(r.b)("li",{parentName:"ul"},"Pixel, Pixel 2"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Nexus 6"),Object(r.b)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxxhdpi Android devices"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfontscale"},Object(r.b)("inlineCode",{parentName:"h3"},"getFontScale()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getFontScale(): number\n")),Object(r.b)("p",null,"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"on Android value reflects the user preference set in ",Object(r.b)("strong",{parentName:"li"},"Settings > Display > Font size")),Object(r.b)("li",{parentName:"ul"},"on iOS value reflects the user preference set in ",Object(r.b)("strong",{parentName:"li"},"Settings > Display & Brightness > Text Size"),", value can also be updated in ",Object(r.b)("strong",{parentName:"li"},"Settings > Accessibilty > Display & Test Size > Larger Text"))),Object(r.b)("p",null,"If a font scale is not set, this returns the device pixel ratio."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpixelsizeforlayoutsize"},Object(r.b)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getPixelSizeForLayoutSize(layoutSize: number): number\n")),Object(r.b)("p",null,"Converts a layout size (dp) to pixel size (px)."),Object(r.b)("p",null,"Guaranteed to return an integer number."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"roundtonearestpixel"},Object(r.b)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static roundToNearestPixel(layoutSize: number): number\n")),Object(r.b)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."))}u.isMDXComponent=!0}}]);