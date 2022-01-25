(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8771:function(e,t,n){"use strict";var o=n(1682);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));var r=o=a(a({},o),t);if(r.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(r.suspense)return n(r);o.loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,l(n,o);delete o.ssr}return n(o)};s(n(7294));var i=s(n(4860));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=r},4860:function(e,t,n){"use strict";var o=n(2553),r=n(2012),a=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,d=(u=n(7294))&&u.__esModule?u:{default:u},m=n(7161),f=n(1083);var p=[],h=[],g=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var y=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var o=null;function r(){if(!o){var t=new y(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!g&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();h.push((function(e){var t,n=l(a);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return r()}}catch(i){n.e(i)}finally{n.f()}}))}var i=n.suspense?function(e,t){return d.default.createElement(n.lazy,s(s({},e),{},{ref:t}))}:function(e,t){r();var a=d.default.useContext(f.LoadableContext),i=m.useSubscription(o);return d.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!n.suspense&&r()},i.displayName="LoadableComponent",d.default.forwardRef(i)}(b,e)}function w(e,t){for(var n=[];e.length;){var o=e.pop();n.push(o(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return g=!0,t()};w(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var j=v;t.default=j},4918:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return w}});var o=n(5152),r=n(5697),a=n.n(r),i=(n(2806),n(7294),n(9008)),s=n(5893);function l(e){var t=e.data;return(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:t.title}),(0,s.jsx)("meta",{name:"title",content:t.title}),(0,s.jsx)("meta",{name:"google-site-verification",content:"dQ69mX2dFFE5f8Zr2bIrJUJ8WHtdhlVBUGucYtYJapU"}),(0,s.jsx)("meta",{name:"author",content:"Tejas Ghone"}),(0,s.jsx)("meta",{name:"description",content:t.description}),(0,s.jsx)("meta",{name:"keywords",content:t.keywords.join(", ")}),(0,s.jsx)("link",{rel:"canonical",href:t.url}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:t.url}),(0,s.jsx)("meta",{property:"og:title",content:t.title}),(0,s.jsx)("meta",{property:"og:description",content:t.description}),(0,s.jsx)("meta",{property:"og:image",content:t.image}),(0,s.jsx)("meta",{property:"og:site_name",content:t.title}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:t.url}),(0,s.jsx)("meta",{property:"twitter:title",content:t.title}),(0,s.jsx)("meta",{property:"twitter:description",content:t.description}),(0,s.jsx)("meta",{property:"twitter:image",content:t.image}),(0,s.jsx)("meta",{name:"robots",content:"Index"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"./favicon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./favicon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"./favicon.png"}),(0,s.jsx)("script",{async:!0,src:"https://code.iconify.design/1/1.0.4/iconify.min.js"})]})}l.prototype={data:a().shape({title:a().string.isRequired,description:a().string,image:a().string,url:a().string,keywords:a().arrayOf(a().string)}).isRequired};var c=l,u=(0,o.default)((function(){return Promise.all([n.e(351),n.e(656),n.e(590)]).then(n.bind(n,1590))}),{loadableGenerated:{webpack:function(){return[1590]},modules:["index.js -> ../components/Navigation"]}}),d=(0,o.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(185)]).then(n.bind(n,3185))}),{loadableGenerated:{webpack:function(){return[3185]},modules:["index.js -> ../containers/Greetings"]}}),m=(0,o.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(656),n.e(546),n.e(688)]).then(n.bind(n,5688))}),{loadableGenerated:{webpack:function(){return[5688]},modules:["index.js -> ../containers/Skills"]}}),f=(0,o.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(716)]).then(n.bind(n,3716))}),{loadableGenerated:{webpack:function(){return[3716]},modules:["index.js -> ../containers/Proficiency"]}}),p=(0,o.default)((function(){return Promise.all([n.e(351),n.e(51)]).then(n.bind(n,4051))}),{loadableGenerated:{webpack:function(){return[4051]},modules:["index.js -> ../containers/Education"]}}),h=(0,o.default)((function(){return Promise.all([n.e(351),n.e(675),n.e(39),n.e(974)]).then(n.bind(n,3974))}),{loadableGenerated:{webpack:function(){return[3974]},modules:["index.js -> ../containers/Experience"]}}),g=(0,o.default)((function(){return Promise.all([n.e(351),n.e(829)]).then(n.bind(n,4829))}),{loadableGenerated:{webpack:function(){return[4829]},modules:["index.js -> ../containers/Projects"]}}),b=(0,o.default)((function(){return Promise.all([n.e(351),n.e(519)]).then(n.bind(n,3519))}),{loadableGenerated:{webpack:function(){return[3519]},modules:["index.js -> ../containers/Feedbacks"]}}),y=(0,o.default)((function(){return Promise.all([n.e(351),n.e(675),n.e(551)]).then(n.bind(n,9551))}),{loadableGenerated:{webpack:function(){return[9551]},modules:["index.js -> ../components/GithubProfileCard"]}}),v=!0;function w(e){var t=e.githubProfileData;return(0,s.jsxs)("div",{children:[(0,s.jsx)(c,{data:{title:"Tejas Ghone",description:"A passionate Full Stack Web Developer and Mobile App Developer.",image:"/tejasghone-portfolio/img/icons/common/self.jpg",keywords:["tejas","Tejas Ghone","@1tejas100","1tejas100","Portfolio","tejas Portfolio ","Tejas Ghone Portfolio","web developer","full stack","full stack web developer","mobile app developer","android developer","django","flask","django rest framework","nodejs ","expressjs","reactjs ","contextapi","redux","flutter"]}}),(0,s.jsx)(u,{}),(0,s.jsx)(d,{}),(0,s.jsx)(m,{}),(0,s.jsx)(p,{}),(0,s.jsx)(h,{}),(0,s.jsx)(f,{}),(0,s.jsx)(g,{}),(0,s.jsx)(b,{}),(0,s.jsx)(y,{prof:t})]})}w.prototype={githubProfileData:a().object.isRequired}},2806:function(e,t,n){"use strict";n.d(t,{c0:function(){return o},KT:function(){return r},LO:function(){return a},E5:function(){return i},b8:function(){return s},q:function(){return l},KK:function(){return c}});var o={name:"Tejas Ghone",title:"Hey, I'm Tejas",description:"I love solving problems using tech",resumeLink:"https://drive.google.com/file/d/1t0P-sVbnNeEqvzPpObyGdr6OjNS0Gxmf/view?usp=sharing"},r={github:"https://github.com/Tejas988/",instagram:"https://www.instagram.com/_tejas.1801/",facebook:"https://ne-np.facebook.com/tejas.ghone.77/",twitter:"https://twitter.com/TejasG16960740",linkedin:"https://www.linkedin.com/in/tejas-ghone-3372a9199/",codeforces:"https://codeforces.com/profile/newbie0928",codechef:"https://www.codechef.com/users/brute99",leetcode:"https://leetcode.com/tejas_18/"},a={title:"What I do",subTitle:"Running a depth first search on my domains of interest",skills:["Flexible with respect to tech stack. I believe in learning by doing","Interested in Algorithms,Operating Systems ,Cryptography,Blockchain & Distributed Systems","I like to write clean, maintainable, robust code, even if it takes a little more time ;) "],softwareSkills:[{skillName:"html-5",fontAwesomeClassname:"vscode-icons:file-type-html"},{skillName:"css3",fontAwesomeClassname:"vscode-icons:file-type-css"},{skillName:"sass",fontAwesomeClassname:"logos:sass"},{skillName:"JavaScript",fontAwesomeClassname:"logos:javascript"},{skillName:"reactjs",fontAwesomeClassname:"vscode-icons:file-type-reactjs"},{skillName:"nodejs",fontAwesomeClassname:"logos:nodejs-icon"},{skillName:"reactnative",fontAwesomeClassname:"vscode-icons:file-type-reactjs"},{skillName:"npm",fontAwesomeClassname:"vscode-icons:file-type-npm"},{skillName:"sql-database",fontAwesomeClassname:"vscode-icons:file-type-sql"},{skillName:"mongoDB",fontAwesomeClassname:"vscode-icons:file-type-mongo"},{skillName:"firebase",fontAwesomeClassname:"logos:firebase"},{skillName:"git",fontAwesomeClassname:"logos:git-icon"},{skillName:"CPP",fontAwesomeClassname:"vscode-icons:file-type-cpp"},{skillName:"Java",fontAwesomeClassname:"vscode-icons:file-type-java"},{skillName:"C",fontAwesomeClassname:"vscode-icons:file-type-c"},{skillName:"python",fontAwesomeClassname:"logos:python"},{skillName:"Rust",fontAwesomeClassname:"logos:rust"},{skillName:"solidity",fontAwesomeClassname:"logos:solidity"}]},i=[{weight:1,schoolName:"Dwarkadas J. Sanghvi College of Engineering",subHeader:"Bachelor of Engineering in Computer Science",duration:"July 2018 - June 2022",desc:"Worked on multiple projects in core computer science domain and published 2 papers.",descBullets:["9.82 of 10.00 GPA upto 7th Semester","Mentor at DJ Unicode 2020-21","Co-Infotech Head DJ ACM 2019-20"]},{schoolName:"Nirmala Memorial Foundation College of Science & Arts",subHeader:"Higher Secondary School (HSC)",duration:"August 2016 - May 2018",descBullets:["81% Overall","Specialization in Computer Science"]},{schoolName:"St Francis D'Assisi High School",subHeader:"Secondary School Certificate (SSC)",duration:"Till April 2016",desc:"Ranked among top 10% in the school.",descBullets:["92.80% Overall"]}],s=[{role:"Technology Analyst Intern",company:"JioSaavn",companylogo:"/img/icons/common/saavnLogo.png",date:"June 2021 \u2013 August 2021",desc:"Worked on Saavn Intellect , an advertisement management platform , where AD campaigns run on JioSaavn app are created and managed along with analysis of user and product data",descBullets:["Developed the frontend in React.js and successfully deployed  functional version on production focusing on design, testing  and scalability","Wrote flexible code and gained experience on Agile Software delivery"]},{role:"MERN Stack Developer Intern",company:"Humaps Pvt.ltd",companylogo:"/img/icons/common/humps.jpg",date:"Jan 2021 \u2013 March 2021",desc:"Worked with full stack development team for creating a Report Framework , a framework which can be used to generate , schedule, deliver runtime reports in an organization",descBullets:["Documented ,designed and implementing solutions for the Report framework in frontend and backend","Imporved responsivness of frontend by implementing preprocessing of data using web workers"]}],l=[{name:"Network Simulator",stacks:["Svelte","SVG.js","Vis.js","JSON"],desc:"This is a simple in browser network simulator, which can be used to visualize network graph and run specific logic code on packets.",descBullets:["Simulate packet transmission with animations","Implemented network graph parser and examples such as ARP Spoofing , DDOS , TCP-IP etc for simulation.","Project accepted in IEEE 2022 7th I2CT,Pune,Maharashtra,India. Paper ID - 223"],link:"https://yjdoc2.github.io/Network-Simulator/",github:"https://github.com/YatharthVyas/Network-Simulator"},{name:"In-Tuition",stacks:["Node.js","MongoDB","React","ReactNative","Firebase","WebSockets"],descBullets:["A platform for connecting home tutors to students across the world and organize their batches , lectures , tests , assignments and related study materials all in a single application ","Designed the schema and implemented the logic for assignment and lecture scheduling using cron jobs in backend along with other apis focusing on mvc architecture ","Contributed in frontend by designing and developing components in react.js and react native"],github:"https://github.com/Tejas988/LOC3.0_The_Classicals_Backend"},{name:"Infant Emotion Detection using Audio Vistual stream",stacks:["Python","Tensorflow","Keras","OpenCV","CVZone","Transfer Learning"],descBullets:["A multi-modal CNN to predict emotions of infants based on audio characteristics of their cry and a video stream","MFCC is used to extract audio frequencies and is then fed into an ANN.","Images are sampled from a video at 6 frames per second, augmented to increase dataset size and then used to train an ensemble of 6 Convoluted Neural Networks.","A total of 5 unique datasets collected from researchers have been combined for training and testing."]},{name:"8086 Emulator Web",stacks:["ReactJs","Web Assembly","Rust"],descBullets:["Emulates Intel 8086 instruction set and provides an interactive interpreter to run programs in native syntax line by line.","Error reporting & handling, code highlighting, and code execution is supported.","Runs without any backend/server and is completely client-side with zero hosting and maintainance required."],link:"https://yjdoc2.github.io/8086-emulator-web/",github:"https://github.com/YatharthVyas/8086-emulator-web-1"},{name:"Inventory Management",stacks:["ReactNative","Django","SQL"],descBullets:["Contributed in designing the schema and developing pages in react native for the mobile application","Collaborated with team of 3 for developing the frontend of the application."],github:"https://github.com/Tejas988/inventory-management-rn"},{name:"Digit Recognizer",stacks:["Web Assembly","Rust","JavaScript","HTML-Canvas"],descBullets:["Neural Network in Rust from scratch and trained over MNIST data, accuracy in the range of 95 to 96%","The grayscale pixels are pre-processed in frontend, and fed to the Web Assembly for prediction."],github:"https://github.com/Tejas988/Rust-NN",link:"http://rust-nn-web.herokuapp.com/"}],c=[{name:"Simple Network Simulator",feedback:"This paper has been accepted by 'IEEE 2022 7th International Conference for Convergence in Technology (I2CT), Pune' which has Ei Compendex and Scopus Indexing. It is about the implementation of a fully customizable network simulator that can be programmed using Javascript and JSON. It is designed to help researchers and professors in teaching concepts of Networks and Cyber Security with animated packet transfer"},{name:"Simulation of a Distributed Architecture on a Single System using Nodes emulated by Docker containers:",feedback:"I'm a part of a group researching the simulation of a multi-node system using Linux\u2019s namespaces through containers using Docker. Results obtained proved an optimization from 98 seconds on a single node to 45 seconds in a simulated multi-node configuration. The paper for the same is currently under work"},{name:"Emulating Intel's 8086 Microprocessor using Rust and WASM",feedback:"This study presents various advantages of emulating an 8086 microprocessor using Rust and WASM and describes the technology and architecture involved behind one. The paper is currently under review."},{name:"Infant Emotion Detection using a live audio-visual stream",feedback:"Currently Ongoing: We are working on a research project to detect emotions of infants. It involves gathering and merging several unique datasets followed by a meticulous process of analysis and interpretation involved due to the sensitive nature of the data."}]},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4918)}])},5152:function(e,t,n){e.exports=n(8771)},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);