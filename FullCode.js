(() => {
  let ejrClientCheck = document.getElementById("ejrClientContainer")
  if (ejrClientCheck) {ejrClientCheck.remove()}
  let ejrStyleCheck = document.getElementById("ejrClientStyle")
  if (ejrStyleCheck) {ejrStyleCheck.remove()}
  
  const ejrClientCSS = `#ejrClientContainer {
    margin: 8px;
    padding: 5px;
    position: fixed;
    top: 0px;
    left: 0px;
    border: 2px solid #EEEEEE;
    border-radius: 10px;
    background: white;
    max-height: 90vh;
    z-index: 999999;
    box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
  }
  
  #ejrClientContainer #ejrButtonsContainer {
    margin: 0px;
    padding: 0px;
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
  }
  
  #ejrClientContainer #ejrTitle {
    margin: 5px;
    padding: 3px;
    text-align: center;
    align-self: center;
    margin: 10px;
    color: black;
    font-size: 25px;
    font-family: "times";
    white-space: nowrap;
  }
  
  #ejrClientContainer button {
    margin: 5px;
    padding: 7px;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-family: "arial";
    cursor: pointer;
  }
  
  #ejrClientContainer .ejrButton {
    background: #20C20E;
  }
  
  #ejrClientContainer .ejrButton:hover {
    background: #20D20F;
  }
  
  #ejrClientContainer .ejrFolder {
    background: #15810A;
  }
  
  #ejrClientContainer .ejrFolder:hover {
    background: #14A40A;
  }
  
  #ejrClientContainer .ejrBack {
    background: #E10000;
  }
  
  #ejrClientContainer .ejrBack:hover {
    background: #FF0000;
  }`
  
  const ejrClientStyle = document.createElement("style")
  ejrClientStyle.id = "ejrClientStyle"
  ejrClientStyle.textContent = ejrClientCSS
  document.head.appendChild(ejrClientStyle)
  
  const ejrClientContainer = document.createElement("div")
  ejrClientContainer.id = "ejrClientContainer"
  const ejrTitle = document.createElement("h1")
  ejrTitle.id = "ejrTitle"
  ejrTitle.textContent = "EJR Client"
  ejrClientContainer.appendChild(ejrTitle)
  const ejrButtonsContainer = document.createElement("div")
  ejrButtonsContainer.id = "ejrButtonsContainer"
  
  document.body.appendChild(ejrClientContainer)
  ejrClientContainer.appendChild(ejrButtonsContainer)
  
  const setButtonsContainerMaxHeight = () => {
    const ejrClientContainerMaxHeight = getComputedStyle(ejrClientContainer).maxHeight
    const ejrTempButton = document.createElement("button")
    ejrTempButton.style.position = "absolute"
    ejrTempButton.style.visibility = "hidden"
    ejrClientContainer.appendChild(ejrTempButton)
    const ejrButtonsHeight = getComputedStyle(ejrTempButton).height
    ejrTempButton.remove()
    ejrButtonsContainer.style.maxHeight = `calc(${ejrClientContainerMaxHeight} - ${ejrTitle.offsetHeight}px - ${ejrButtonsHeight})`
  }
  
  setButtonsContainerMaxHeight()
  window.addEventListener("resize", setButtonsContainerMaxHeight)

let buttons = [
  {
    type: "folder",
    text: "Tools",
    subfolder: [
      {
        type: "button",
        text: "Inspect Element",
        onclick: () => {
          (function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
        },
      },
      {
        type: "button",
        text: "Pause Page",
        onclick: () => {
          alert("Page Paused! It's actually an interesting functionality that alerts pause the page, right?")
        },
      },
      {
        type: "button",
        text: "Unhide Password Text",
        onclick: () => {
          (function(){var s,F,j,f,i; s = ""; F = document.forms; for(j=0; j<F.length; ++j) { f = F[j]; for (i=0; i<f.length; ++i) { if (f[i].type.toLowerCase() == "password") s += f[i].value + "\n"; } } if (s) alert("Passwords in forms on this page:\n\n" + s); else alert("There are no passwords in forms on this page.");})();
        },
      },
      {
        type: "button",
        text: "Autoclicker",
        onclick: () => {
          (function(x,y){if(!window.click){window.click=!0,document.body.style.cursor='crosshair';var cps=prompt('Autoclicker CPS: (Under 200 recommended)');if(!cps||isNaN(cps)?(alert('You entered something wrong. Try running the script again.'),end()):alert('Autoclicker activated at '+cps+' CPS! Do [ctrl+e] to stop.'),addEventListener('mousemove',e=>{x=e.clientX,y=e.clientY}),addEventListener('keydown',e=>{'e'===e.key&&e.ctrlKey&&(alert('Autoclicker deactivated! Click the bookmark again to reactivate!'),end())}),window.click)var int=setInterval(function(){var e=document.elementFromPoint(x,y);e&&e.click()},1e3/cps);function end(){clearInterval(int),window.click=!1,document.body.style.cursor='default'}}})();
        },
      },
      {
        type: "button",
        text: "Clear Cookies",
        onclick: () => {
          (function(){document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); }); })();
        },
      },
      {
        type: "button",
        text: "Restore Right-Click",
        onclick: () => {
          void(document.onmousedown='return true');void(document.onmouseup='return true');void(document.oncontextmenu='return true');
        },
      },
      {
        type: "button",
        text: "YouTube Customization",
        onclick: () => {
          (()=>{let e=document.getElementById("youtubeClientContainer");e&&e.remove();let n=document.getElementById("youtubeClientStyle");n&&n.remove();const t=document.createElement("style");t.id="youtubeClientStyle",t.innerText='#youtubeClientContainer {\n  margin: 20px;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  border: 2px solid #EEEEEE;\n  border-radius: 8px;\n  padding: 15px 13px 2px 2px;\n  background: white;\n  box-shadow: 1px 1px 8px rgba(255, 255, 255, 0.7);\n  z-index: 999999;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  box-sizing: border-box;;\n}\n\n#youtubeClientContainer #closeButton {\n  position: absolute;\n  background: none;\n  top: 0px;\n  right: 0px;\n  padding: 0px;\n  margin: 3px;\n  border: none;\n  color: #FF0000;\n  cursor: pointer;\n  font-family: "times";\n  font-size: 12px;\n}\n\n#youtubeClientContainer #speedButton {\n  background: #FF0000;\n  padding: 5px;\n  margin: 2px;\n  border: none;\n  border-radius: 5px;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-family: "arial";\n  font-size: 12px;\n}',document.head.appendChild(t);const o=document.createElement("div");o.id="youtubeClientContainer";const i=document.createElement("button");i.id="closeButton",i.onclick=()=>{document.getElementById("youtubeClientContainer").remove(),document.getElementById("youtubeClientStyle").remove()},i.innerText="X",o.appendChild(i);const d=document.createElement("button");d.id="speedButton",d.onclick=()=>{u()},d.innerText="Skip Ad",o.appendChild(d);const r=document.createElement("button");r.id="speedButton",r.onclick=()=>{p(parseFloat(prompt("Enter your desired playback speed:")))},r.innerText="Set Speed",o.appendChild(r);const l=document.createElement("button");l.id="speedButton",l.onclick=()=>{m(parseFloat(prompt("Enter your desired volume (1-100):")))},l.innerText="Set Volume",o.appendChild(l);const a=document.createElement("button");a.id="speedButton",a.onclick=()=>{c(parseFloat(prompt("Enter your desired playback speed:")))},a.innerText="Set Brightness",o.appendChild(a),document.body.appendChild(o);const u=()=>{var e=document.getElementsByTagName("video")[0];e.currentTime=e.duration},p=e=>{document.getElementsByTagName("video")[0].playbackRate=e},m=e=>{var n=document.getElementsByTagName("video")[0];n.volume<=100&&n.volume>=0?n.volume=e/100:n.volume>100?alert("The video's volume cannot go above 100%"):alert("The video's volume cannot go into the negatives! What would that even do?")},c=e=>{document.getElementsByTagName("video")[0].style.filter=`brightness(${e})`}})();
        },
      },
      {
        type: "button",
        text: "Highlight Links",
        onclick: () => {
          if(document.getElementById('chridd_linkborders')!=null)void document.head.removeChild(document.getElementById('chridd_linkborders'));else (function(){var l=document.createElement('style');l.id='chridd_linkborders';l.innerHTML='a {outline-style:solid !important; outline-width:1px !important} a:link {outline-color:blue !important;} a:visited {outline-color:orange !important;}';document.head.appendChild(l);})();
        },
      },
      {
        type: "button",
        text: "Bypass Article Paywalls",
        onclick: () => {
          var currentsite=document.querySelector("meta[property='al:android:app_name']")?document.querySelector("meta[property='al:android:app_name']").content:window.location.href;function isPage(e){return currentsite.includes(e)}function preprocess(e){var r,t=e;(isPage("NYTimes")&&(document.querySelector("html").innerHTML=t),isPage("Medium")&&(t=e.replace(/<\/?noscript>/g,"")),isPage("Bloomberg"))&&((r=document.createElement("html")).innerHTML=e,r.querySelectorAll("script").forEach(e=>e.outerHTML=""),t=r.outerHTML,document.open(),document.write(t),document.close());isPage("businessinsider")&&((r=document.createElement("html")).innerHTML=e,r.querySelectorAll("script").forEach(e=>e.outerHTML=""),r.querySelectorAll("iframe").forEach(e=>e.outerHTML=""),r.querySelectorAll("figure").forEach(e=>{e.innerHTML=e.querySelector("noscript").innerHTML}),t=r.outerHTML,document.open(),document.write(t),document.close())}fetch(window.location.href,{credentials:"omit",redirect:"follow",mode:"no-cors"}).then(e=>e.text()).then(e=>{preprocess(e)});
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Math",
    subfolder: [
      {
        type: "button",
        text: "Arithmetic Calculator",
        onclick: () => {
          alert(eval(prompt("Enter an arithmetic expression:")))
        },
      },
      {
        type: "button",
        text: "System Solver",
        onclick: () => {
          (function(){    let input=prompt('Enter your equations, separated by semicolons. For example, "3,4=1; 2,3=1":');    if(!input) return;    let equations=input.split(';').map(eq => eq.trim().split('='));    let matrix=equations.map(eq => eq[0].split(',').map(Number));    let constants=equations.map(eq => Number(eq[1]));        if(matrix.length !== matrix[0].length) {        alert('The number of equations does not match the number of unknowns.');        return;    }    function solve(matrix, constants) {        let n=constants.length;        for(let i=0; i<n; i++) {            let max=i;            for(let j=i+1; j<n; j++) {                if(Math.abs(matrix[j][i]) > Math.abs(matrix[max][i])) max=j;            }            if(i !== max) {                [matrix[i], matrix[max]] = [matrix[max], matrix[i]];                [constants[i], constants[max]] = [constants[max], constants[i]];            }            for(let k=i+1; k<n; k++) {                let factor=matrix[k][i] / matrix[i][i];                for(let j=i; j<n; j++) matrix[k][j] -= factor * matrix[i][j];                constants[k] -= factor * constants[i];            }        }        let solution=Array(n).fill(0);        for(let i=n-1; i>=0; i--) {            solution[i] = constants[i] / matrix[i][i];            for(let j=i-1; j>=0; j--) constants[j] -= matrix[j][i] * solution[i];        }        return solution.map(num => Math.round(num * 10000) / 10000);    }        let solution=solve(matrix, constants);    if(solution.every(isFinite)) {        alert('Solution: ' + solution.join(', '));    } else {        alert('No unique solution found.');    }})();
        },
      },
      {
        type: "button",
        text: "Prime Factorizor",
        onclick: () => {
          (function(){    let input = prompt('Enter a positive integer for prime factorization:');    let number = parseInt(input);    if (isNaN(number) || number < 1) {        alert('Please enter a valid positive integer.');        return;    }    let factors = primeFactors(number);    let formattedFactors = formatFactors(factors);    alert(formattedFactors);    function primeFactors(n) {        let factors = [], divisor = 2;        while (n >= 2) {            if (n % divisor == 0) {                factors.push(divisor);                n = n / divisor;            } else {                divisor++;            }        }        return factors;    }    function formatFactors(factors) {        let factorCounts = factors.reduce((acc, factor) => {            acc[factor] = (acc[factor] || 0) + 1;            return acc;        }, {});        let formatted = Object.keys(factorCounts).map(factor => {            if (factorCounts[factor] === 1) return factor;            return `${factor}^${factorCounts[factor]}`;        }).join(' * ');        return formatted;    }})();
        },
      },
      {
        type: "button",
        text: "Fibonacci Sequence",
        onclick: () => {
          (function(){let n=parseInt(prompt('Enter the number of Fibonacci terms:'));if(isNaN(n)||n<1){alert('Please enter a valid positive integer.');return;}let fib=[1,1];for(let i=2;i<n;i++){fib[i]=fib[i-1]+fib[i-2];}alert(fib.join(', '));})();
        },
      },
      {
        type: "button",
        text: "Collatz Conjecture",
        onclick: () => {
          (function(){let n=parseInt(prompt('Enter a starting number for the Collatz sequence:'));if(isNaN(n)||n<1){alert('Please enter a valid positive integer.');return;}let seq=[n];while(n>1){n=n%2===0?n/2:3*n+1;seq.push(n);}alert('Collatz sequence: '+seq.join(', '));})();drive.google.com/drive/u/0/home
        },
      },
      {
        type: "button",
        text: "Number in Base N",
        onclick: () => {
          (function(){let num=prompt('Enter a number:');let base=parseInt(prompt('Enter the base to convert to (2-36):'));if(isNaN(base)||base<2||base>36){alert('Please enter a valid base between 2 and 36.');return;}let converted=parseInt(num).toString(base);alert('Number in base '+base+': '+converted);})();
        },
      },
      {
        type: "button",
        text: "Largest Prime Under N",
        onclick: () => {
          (function(){let n=parseInt(prompt('Enter a maximum number:'));if(isNaN(n)||n<1){alert('Please enter a valid positive integer.');return;}for(let i=n; i>1; i--){if(isPrime(i)){alert('Largest prime less than '+n+': '+i);break;}}function isPrime(num){for(let j=2, s=Math.sqrt(num); j<=s; j++)if(num%j===0)return false;return num>1;}})();
        },
      },
      {
        type: "button",
        text: "Nth Prime",
        onclick: () => {
          (function(){let n=parseInt(prompt('Enter n to find the nth prime number:'));if(isNaN(n)||n<1){alert('Invalid input');return;}let count=0,i=1;while(count<n){i++;if(isPrime(i)){count++;}}alert(i);function isPrime(num){for(let j=2,s=Math.sqrt(num);j<=s;j++)if(num%j===0)return false;return num>1;}})();
        },
      },
      {
        type: "button",
        text: "Factorial",
        onclick: () => {
          (function(){let n=parseInt(prompt('Enter a number to calculate its factorial:'));if(isNaN(n)||n<0){alert('Please enter a valid non-negative integer.');return;}let result=factorial(n);alert(n+'! = '+result);function factorial(num){let res=BigInt(1);for(let i=BigInt(2);i<=BigInt(num);i++){res*=i;}return res.toString();}})();
        },
      },
      {
        type: "button",
        text: "Pattern Finder",
        onclick: () => {
          (function(){    let userInput = prompt('Enter a sequence of numbers separated by commas:');    if (!userInput) {        alert('No input provided.');        return;    }    let sequence = userInput.split(',').map(Number);    if (sequence.some(isNaN)) {        alert('Invalid sequence. Please enter only numbers separated by commas.');        return;    }    let pattern = analyzeSequence(sequence);    alert('Pattern: ' + pattern);    function analyzeSequence(seq) {        if (seq.length < 3) return 'Insufficient data for pattern analysis.';        let isFibonacci = seq.every((val, i) => i < 2 || val === (seq[i - 1] + seq[i - 2]));        let firstTwo = seq.slice(0, 2).join(', ');        let diff = seq[1] - seq[0];        let ratio = seq[1] / seq[0];        let isArithmetic = seq.every((val, i, arr) => i === 0 || val - arr[i - 1] === diff);        let isGeometric = seq.every((val, i, arr) => i === 0 || val / arr[i - 1] === ratio);        let isSquare = seq.every((val, i, arr) => i === 0 || val === Math.pow(arr[i - 1], 2));        if (isFibonacci) return `Fibonacci-like sequence starting with: ${firstTwo}.`;        if (isArithmetic) return 'Arithmetic sequence with a difference of ' + diff + '.';        if (isGeometric) return 'Geometric sequence with a ratio of ' + ratio + '.';        if (isSquare) return 'Each number is the square of the previous one.';        return 'No simple arithmetic, geometric, Fibonacci-like, or squaring pattern detected.';    }})();
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Text",
    subfolder: [
      {
        type: "button",
        text: "Content Editable",
        onclick: () => {
          (()=>{let $=document.body;$.contentEditable=$.contentEditable=='true'?false:true})()
        },
      },
      {
        type: "button",
        text: "Invert Colors",
        onclick: () => {
          (function(){function RGBtoHSL(RGBColor){with(Math){var R,G,B;var cMax,cMin;var sum,diff;var Rdelta,Gdelta,Bdelta;var H,L,S;R=RGBColor[0];G=RGBColor[1];B=RGBColor[2];cMax=max(max(R,G),B);cMin=min(min(R,G),B);sum=cMax+cMin;diff=cMax-cMin;L=sum/2;if(cMax==cMin){S=0;H=0;}else{if(L<=(1/2))S=diff/sum;else S=diff/(2-sum);Rdelta=R/6/diff;Gdelta=G/6/diff;Bdelta=B/6/diff;if(R==cMax)H=Gdelta-Bdelta;else if(G==cMax)H=(1/3)+Bdelta-Rdelta;else H=(2/3)+Rdelta-Gdelta;if(H<0)H+=1;if(H>1)H-=1;}return[H,S,L];}}function getRGBColor(node,prop){var rgb=getComputedStyle(node,null).getPropertyValue(prop);var r,g,b;if(/rgb\((\d+),\s(\d+),\s(\d+)\)/.exec(rgb)){r=parseInt(RegExp.$1,10);g=parseInt(RegExp.$2,10);b=parseInt(RegExp.$3,10);return[r/255,g/255,b/255];}return rgb;}function hslToCSS(hsl){return "hsl("+Math.round(hsl[0]*360)+", "+Math.round(hsl[1]*100)+"%, "+Math.round(hsl[2]*100)+"%)";}var props=["color","background-color","border-left-color","border-right-color","border-top-color","border-bottom-color"];var props2=["color","backgroundColor","borderLeftColor","borderRightColor","borderTopColor","borderBottomColor"];if(typeof getRGBColor(document.documentElement,"background-color")=="string")document.documentElement.style.backgroundColor="white";revl(document.documentElement);function revl(n){var i,x,color,hsl;if(n.nodeType==Node.ELEMENT_NODE){for(i=0;x=n.childNodes[i];++i)revl(x);for(i=0;x=props[i];++i){color=getRGBColor(n,x);if(typeof(color)!="string"){hsl=RGBtoHSL(color);hsl[2]=1-hsl[2];n.style[props2[i]]=hslToCSS(hsl);}}}}})();
        },
      },
      {
        type: "button",
        text: "Replacer",
        onclick: () => {
          var count=0;function htmlreplace(a,b,element){if(!element)element=document.body;var nodes=element.childNodes;for(var n=0;n<nodes.length;n++){   if(nodes[n].type&&nodes[n].type.toLowerCase()=='textarea'){      var r=new RegExp(a,'gim');      if(nodes[n].value.match(r)){        count++;      }      nodes[n].value=nodes[n].value.replace(r,b)    }    else if(nodes[n].nodeValue && nodes[n].nodeValue.length > 0){      var r=new RegExp(a,'gim');      if(nodes[n].nodeValue.match(r)){        count++;      }      nodes[n].nodeValue=nodes[n].nodeValue.replace(r,b)    }    else{      htmlreplace(a,b,nodes[n])    }  }}htmlreplace(prompt('find'),prompt('replace'));alert('replaced '+count+' words.');
        },
      },
      {
        type: "button",
        text: "All Text Lowercase",
        onclick: () => {
           (function() { var i, t, D = document; for (i = 0; t = D.getElementsByTagName('textarea')[i]; ++i) t.value = t.value.toLowerCase();  var newSS, styles = '*{text-transform:lowercase}input,textarea{text-transform:none}'; if (D.createStyleSheet) { D.createStyleSheet("javascript:'" + styles + "'"); } else { newSS = D.createElement('link'); newSS.rel = 'stylesheet'; newSS.href = 'data:text/css,' + escape(styles); D.getElementsByTagName("head")[0].appendChild(newSS); } })();
        },
      },
      {
        type: "button",
        text: "All Text Uppercase",
        onclick: () => {
           (function() { var i, t, D = document; for (i = 0; t = D.getElementsByTagName('textarea')[i]; ++i) t.value = t.value.toLowerCase();  var newSS, styles = '*{text-transform:uppercase}input,textarea{text-transform:none}'; if (D.createStyleSheet) { D.createStyleSheet("javascript:'" + styles + "'"); } else { newSS = D.createElement('link'); newSS.rel = 'stylesheet'; newSS.href = 'data:text/css,' + escape(styles); D.getElementsByTagName("head")[0].appendChild(newSS); } })();
        },
      },
      {
        type: "button",
        text: "All Text Capitalized",
        onclick: () => {
           (function() {var i, t, D = document;for (i = 0; t = D.getElementsByTagName('textarea')[i]; ++i) t.value = t.value.toLowerCase(); var newSS, styles = '*{text-transform:capitalize;}input,textarea{text-transform:none}';if (D.createStyleSheet) {D.createStyleSheet("javascript:'" + styles + "'");} else {newSS = D.createElement('link');newSS.rel = 'stylesheet';newSS.href = 'data:text/css,' + escape(styles);D.getElementsByTagName("head")[0].appendChild(newSS);}})();
        },
      },
      {
        type: "button",
        text: "Check Font",
        onclick: () => {
          !function(t){var e=t.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("charset","UTF-8"),e.setAttribute("src","//www.typesample.com/assets/typesample.js?r="+99999999*Math.random()),t.body.appendChild(e)}(document);
        },
      },
      {
        type: "button",
        text: "Text Analytics",
        onclick: () => {
          !function(){var e=document.createElement("div");e.setAttribute("style","color:black;        position:fixed;        left:5%;        top:5%;        width:150px;        height:auto;        font-size:14px;        z-index:10000;        background:white;        border-radius:0px;        border:1px solid grey;        padding:5px 2px 5px 4px;"),e.setAttribute("id","analyticsbox");var t="";window.getSelection&&(t=window.getSelection().toString());var n=function(e){var t=function(e){return e&&""!==e?(e=(e=(e=e.trim()).replace(/\s+/gi," ")).replace(/[^a-zA-Z0-9 ]/gi,"")).split(" "):0}(e)||[],n=e.length;if(0==t.length)return null;var r=0;t.forEach(function(e){r+=e.length}),r/=t.length;var i=t.reduce(function(e,t){return e.length<=t.length?e:t}),o=t.reduce(function(e,t){return e.length>=t.length?e:t});return{wordCount:t.length,charCount:n,minWord:i,maxWord:o,avgLen:r}}(t),r=document.createElement("div");r.setAttribute("style","margin:5px;        font-family:serif;        line-height:1.2em;        font-size:16px;"),null==n?r.innerHTML="No text selected.<br/>Select some text and click the bookmark to run text analysis.":(r.innerHTML="Words: "+n.wordCount+"<br/>",r.innerHTML+="Chars: "+n.charCount+"<br/><br/>",r.innerHTML+="<span>Advanced Lengths</span><br/><br/>",r.innerHTML+="Avg Word: "+n.avgLen+"<br/>",r.innerHTML+="Min Word: "+n.minWord.length+"<br/>",r.innerHTML+="Max Word: "+n.maxWord.length+"<br/>"),e.appendChild(r);var i=document.createElement("div");i.setAttribute("style","        color:black;        position:absolute;        right:6px;        top:5px;        width:auto;        font-size:14px;        text-align:right;        font-family:Arial, sans-serif;        cursor:pointer;"),i.appendChild(document.createTextNode("X")),i.setAttribute("id","textAnalyticsClose"),e.appendChild(i),i.addEventListener("click",function(){e.style.display="none"},!1),document.body.appendChild(e)}();
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Clients",
    subfolder: [
      {
        type: "button",
        text: "Vapor Client",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/VaporClient.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "LumiJS",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/LumiJS.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Car Axle Client",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/CarAxleClient.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Collection",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/Collection.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Custom Cursor",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/CustomCursor.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Ego Client",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/Ego.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Clockmarklet",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/Clockmarklet.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      },
      {
        type: "button",
        text: "Menu List",
        onclick: () => {
          (function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Other-Clients/MenuList.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();      client.remove();
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Proxies",
    subfolder: [
      {
        type: "button",
        text: "ByeSecurely",
        onclick: () => {
           function _0x4328(_0x3740de, _0x8729f5) {    var _0x3acaeb = _0x3aca();    return _0x4328 = function (_0x43289f, _0x3c89a5) {        _0x43289f = _0x43289f - 0xc5;        var _0xb8b29b = _0x3acaeb[_0x43289f];        return _0xb8b29b;    }, _0x4328(_0x3740de, _0x8729f5);}function _0x3aca() {    var _0x21b404 = ['16px', 'fontFamily', '20px', 'left', 'pageX', 'preventDefault', '200px', '#fff', '11052VCwHCg', 'appendChild', 'style', 'mouseup', '470939ylIIxu', 'offsetLeft', 'borderRadius', 'addEventListener', 'pageY', 'remove', 'top', 'Url?', 'href', 'width', 'zIndex', 'innerHTML', 'onhashchange', 'offsetTop', 'getElementsByTagName', '12eqsJxP', 'onclick', '10px', 'then', '205mokRJc', 'span', 'border', '951071TXRAiP', 'backgroundColor', 'div', 'color', 'Launch ByeSecurly', '3fKRmuK', '421546xcyWnZ', '1904VAXUjh', '10TzIRdA', 'fontSize', 'location', 'float', '&times;', 'cursor', 'mousemove', 'src', '0 0 10px rgba(0, 0, 0, 0.5)', 'toString', 'pointer', '#f7f7f7', 'mousedown', '17591BTUZxQ', '1675440CMmlez', 'fixed', '427689XTmBqn', 'right', 'createElement'];    _0x3aca = function () {        return _0x21b404;    };    return _0x3aca();}(function (_0x373394, _0x408de1) {    var _0x2b4463 = _0x4328,        _0x4ae912 = _0x373394();    while (!![]) {        try {            var _0x1d8288 = parseInt(_0x2b4463(0xcd)) / 0x1 + -parseInt(_0x2b4463(0xe9)) / 0x2 * (parseInt(_0x2b4463(0xe8)) / 0x3) + -parseInt(_0x2b4463(0xc9)) / 0x4 * (parseInt(_0x2b4463(0xe0)) / 0x5) + -parseInt(_0x2b4463(0xf9)) / 0x6 + parseInt(_0x2b4463(0xf8)) / 0x7 * (parseInt(_0x2b4463(0xea)) / 0x8) + parseInt(_0x2b4463(0xfb)) / 0x9 * (-parseInt(_0x2b4463(0xeb)) / 0xa) + -parseInt(_0x2b4463(0xe3)) / 0xb * (parseInt(_0x2b4463(0xdc)) / 0xc);            if (_0x1d8288 === _0x408de1) break;            else _0x4ae912['push'](_0x4ae912['shift']());        } catch (_0x19895d) {            _0x4ae912['push'](_0x4ae912['shift']());        }    }}(_0x3aca, 0x50feb));_0x410af0: (function () {    var _0x60ab66 = _0x4328,        _0x51b539 = document[_0x60ab66(0xfd)]('div'),        _0x3d963c = document[_0x60ab66(0xfd)](_0x60ab66(0xe5)),        _0x3fbc48 = document[_0x60ab66(0xfd)](_0x60ab66(0xe1)),        _0x1651fe = document[_0x60ab66(0xfd)]('button');    _0x51b539[_0x60ab66(0xcb)]['position'] = _0x60ab66(0xfa), _0x51b539['style'][_0x60ab66(0xd3)] = _0x60ab66(0x100), _0x51b539['style']['right'] = '20px', _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xd7)] = '9999', _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xe4)] = _0x60ab66(0xf6), _0x51b539[_0x60ab66(0xcb)]['boxShadow'] = _0x60ab66(0xf3), _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xcf)] = '5px', _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xd6)] = _0x60ab66(0xc7), _0x3d963c[_0x60ab66(0xcb)]['padding'] = _0x60ab66(0xde), _0x3fbc48[_0x60ab66(0xcb)]['backgroundColor'] = _0x60ab66(0xfc), _0x3fbc48[_0x60ab66(0xcb)]['color'] = _0x60ab66(0xf0), _0x3fbc48[_0x60ab66(0xd8)] = _0x60ab66(0xef), _0x3fbc48['onclick'] = function () {        var _0xf0f5c7 = _0x60ab66;        _0x51b539[_0xf0f5c7(0xd2)]();    }, _0x1651fe['innerHTML'] = _0x60ab66(0xe7), _0x1651fe['style'][_0x60ab66(0xff)] = 'Arial', _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xec)] = _0x60ab66(0xfe), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xe6)] = _0x60ab66(0xc8), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xe4)] = '#333', _0x1651fe[_0x60ab66(0xcb)]['padding'] = '10px 20px', _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xe2)] = 'none', _0x1651fe[_0x60ab66(0xcb)]['borderRadius'] = '5px', _0x1651fe[_0x60ab66(0xcb)]['marginTop'] = _0x60ab66(0xde), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xf0)] = _0x60ab66(0xf5), _0x1651fe[_0x60ab66(0xdd)] = function () {        var _0x40424c = _0x60ab66,            _0x4f18ec = prompt(_0x40424c(0xd4)),            _0x4d57a6 = 'https://api.codetabs.com/v1/proxy?quest=';        fetch(_0x4d57a6 + _0x4f18ec)[_0x40424c(0xdf)](_0x4a4cc6 => _0x4a4cc6['text']())[_0x40424c(0xdf)](_0x188cad => document['write'](_0x188cad));        var _0x3aef2b = document[_0x40424c(0xdb)]('*');        for (var _0x3558bc = 0x0, _0x7d9589 = _0x3aef2b['length']; _0x3558bc < _0x7d9589; _0x3558bc++) {            _0x3aef2b[_0x3558bc][_0x40424c(0xf2)] && (_0x3aef2b[_0x3558bc][_0x40424c(0xf2)] = new URL(_0x3aef2b[_0x3558bc][_0x40424c(0xf2)], _0x4f18ec)[_0x40424c(0xd5)], _0x3aef2b[_0x3558bc]['src'] = _0x4d57a6 + _0x3aef2b[_0x3558bc][_0x40424c(0xf2)]);        }        window['onbeforeunload'] = function (_0x35368e) {            var _0xe67e54 = _0x40424c;            _0x35368e[_0xe67e54(0xc6)](), alert(_0x35368e[_0xe67e54(0xf4)]());        };        function _0x1131a0(_0x25007d) {            var _0x2649d4 = _0x40424c;            _0x25007d[_0x2649d4(0xc6)](), alert(_0x25007d), window[_0x2649d4(0xed)] = new URL(_0x25007d['oldURL'], _0x25007d['newURL'])[_0x2649d4(0xd5)];        }        window[_0x40424c(0xd9)] = _0x1131a0;    }, _0x3d963c[_0x60ab66(0xca)](_0x1651fe), _0x3d963c[_0x60ab66(0xca)](_0x3fbc48), _0x51b539[_0x60ab66(0xca)](_0x3d963c), document['body']['appendChild'](_0x51b539);    var _0x161c18 = ![],        _0x534152 = {        'x': 0x0,        'y': 0x0    };    _0x3d963c[_0x60ab66(0xd0)](_0x60ab66(0xf7), function (_0x20f1a9) {        var _0x59688 = _0x60ab66;        _0x161c18 = !![], _0x534152['x'] = _0x20f1a9[_0x59688(0xc5)] - _0x51b539[_0x59688(0xce)], _0x534152['y'] = _0x20f1a9[_0x59688(0xd1)] - _0x51b539[_0x59688(0xda)];    }), document['addEventListener'](_0x60ab66(0xf1), function (_0x4730c7) {        var _0x2bec19 = _0x60ab66;        _0x161c18 && (_0x51b539['style'][_0x2bec19(0x101)] = _0x4730c7['pageX'] - _0x534152['x'] + 'px', _0x51b539[_0x2bec19(0xcb)]['top'] = _0x4730c7['pageY'] - _0x534152['y'] + 'px');    }), document[_0x60ab66(0xd0)](_0x60ab66(0xcc), function () {        _0x161c18 = ![];    });}());
        },
      },
      {
        type: "button",
        text: "Proxy to Proxysite",
        onclick: () => {
          (()=>{document.body.innerHTML = `<iframe src="https://proxysite.com" style="border:none;position:absolute;top:0px;left:0px;width:100%;height:100%;margin:0%;padding:0%;" allowfullscreen></iframe>`; document.head.innerHTML = ``})()
        },
      },
      {
        type: "button",
        text: "Google Proxy (Link)",
        onclick: () => {
          (function(){var input = prompt("Enter the desired domain name:"); if(input) {window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + input}})()
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Safe",
    subfolder: [
      {
        type: "button",
        text: "Tab Cloaker",
        onclick: () => {
          (function(){document.title = prompt("Rename tab to...");const head = document.createElement("head"); document.querySelector("html").appendChild(head);const pL = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/512px-Google_Classroom_Logo.svg.png?20221017163738",            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEVChfT///89gvPa5v1ZkvXm7/3///5hmPVnnPXk7f1yovbg6/09g/P8/f9DhfO80vv2+f80ffOtyfqWufhelfVJifTK3PuiwPlMjPS3z/uMs/hXkfUsfPNzpPbu9P7V4vzC1/t6qffWqFqTAAADkUlEQVR4nO3d0XKjIBiG4R+6qVkFAqLRaKLJ/d/kYptNTdLu7HYGUPZ7jtqj+g5VWyRI7JEczvZS1bQ2dXay+0E+9dD9t7oos6PhXMQ+3m/g3BhTlRv9h0I92t4IUir2wX6TckduajvqrwqLpudCrXH4ZhTx1hafFupDzmmtozfnGvKdfC7Utl356H1QvG3kY+HQrff0+4zqhvvCIVdrPwHvuGtOPswLZUd1SoE0nY2d/ijUTVoj+EYpq2+FuzalU/CmPshrYeFuEykS2+K9UFuR5BC6v+Ma/VY4trGPxBfVj1OhtjzRISRl3MWG2KZO6lY/p6gtXGFpUg2cBrFkJKvYh+GREJmk4ZjuELpBPA60T/iX1DFnapK9kk4Ut3RKulDwC2Vp/sX2m6hofdOG/yb1PgAAAAAAAAAAAIgn9poN7z9fTKscIwqw5ECoKounqv0vLuTV7iWe89b/4l6evbDnpcZhSFacghTKiIV5mDGMB4UoRCEKUYhCFKIQhShEIQpRiEIUohCF88LXWMIUVuef8ewDzJdSnW0jCvI5OxHzsUX0J0MAAAAAAAAAABBM5G2zQsxEXefablNuQb8IkCeo/xFPH2BvQF7tN/GMW/9bsUR9MvMa6MlMrCXCDE/XUIhCFKIQhShEIQpRiEIUohCFKEQhCu8KMU+z9sLk50upjjjlHWLOWyT/3CL6KuTYPx8AAAAAAAAAAMLx9Hl8IZYyyeRrT4VqKa8G97QvRlGU9ULexOhrbxO2W1KhB1KiMBgUohCF8aEQhSiMD4UoRGF8KEQhCuNDYRKFPt73tKxCH+/skuy8mEJf711bzHypt3fnhdjy4m/4e//hYh5beDyOpSQCAAAAAAAAAADAf6qOfQCe1VQt5GmBJyKjS9qF/ESWx91F3i/FLZ1N0oVmT8Mx6cLjQDLEvkTRiEoSKxP+NVWmZMSKNuHndvXGFWqb7CAqY7UrZGOfaiG1I5sKdZPqtUa4IZwKWZFHfneMH0rkBXsvlIckLzaq3bFrobvYqOQGUSjV6Fsh0x0llihq0b0FXgvZkCc2iopOA5sXsqFL6V9hN1rdNfBW6O4ZbTL/RynRWs0eC5nc5akU8vxwC5wVuvuibfnq74xK8L6ZL2OeFzI92tpwpZRYYag7Yne15Ly3o2ZfFbrGTVkZM62EXFuimnazMMdtWej7pIfC6Xwc9jbP2pWNoqK6utjz8LxA+xf3EnYyP4clyAAAAABJRU5ErkJggg==",            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"];    var a = prompt("Type a number between 0 and 2, \n0 = google classroom \n1 = google docs\n2 = google");if (a < 0 || a > 2 || isNaN(a)) {    alert("You entered something wrong. Make sure that your number is 0, 1, or 2 and make sure you put nothing else.");} else {    const link = document.createElement('link');    link.rel = 'icon';    link.href = pL[a];    document.head.appendChild(link);}})();
        },
      },
      {
        type: "button",
        text: "Secure Tab",
        onclick: () => {
          (()=>{window.onbeforeunload=(event)=>{alert("Do you want to close?");event.returnValue="";return""}})()
        },
      },
      {
        type: "button",
        text: "Teacher Safe",
        onclick: () => {
          (function(){var elem=document.createElement('div');var body=document.getElementsByTagName('body')[0];body.appendChild(elem);elem.style.position='fixed';elem.style.top='0px';elem.style.right='0px';elem.style.margin='10px';elem.style.paddingTop='10px';elem.style.width='200px';elem.style.height='40px';elem.style.zIndex=10000;elem.style.opacity=0.9;elem.style.color='white';elem.style.backgroundColor='black';elem.style.border='1px solid white';elem.style.textAlign='center';elem.style.cursor='pointer';elem.id='elem';elem.style.display='block';elem.innerText='Z';})();var safety=prompt("what tab do you want to open when a teacher comes by? Click z to go to that tab. Warning: may have to click out of element for it to work");window.addEventListener("keydown",function(event){if(event.key=="z"){location.replace(safety);}});document.getElementById('elem').addEventListener('click', function(){location.replace(safety);});
        },
      },
      {
        type: "button",
        text: "Flood History",
        onclick: () => {
          var num=prompt("Enter # of times you want this site to appear in your history");done=false;x=window.location.href;for (var i=1; i<num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History Flooding Successful!\n "+window.location.href+" \nNow Appears In Your History "+num+(num==1?" time.":" Times. \nYoinked by 2emk7"))};
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Cheats",
    subfolder: [
      {
        type: "button",
        text: "Wordle Solver",
        onclick: () => {
          !function(){fetch(`https://www.nytimes.com/svc/wordle/v2/${function(){const t=new Date;return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`}()}.json`).then(t=>t.json()).then(t=>{!function(t){t=t.toLowerCase();for(const n of t)window.dispatchEvent(new KeyboardEvent("keydown",{key:n}));window.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}))}(t.solution)})}();
        },
      },
      {
        type: "button",
        text: "Spelling Bee Solver",
        onclick: () => {
          !function(){function n(n){n=n.toLowerCase();for(const o of n)window.dispatchEvent(new KeyboardEvent("keydown",{key:o}));window.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}))}!function(){const o=window.gameData.today.answers;for(const e of o)n(e)}()}();
        },
      },
      {
        type: "button",
        text: "Cookie Clicker Solver",
        onclick: () => {
          (function(){function n(){var e=document.getElementsByClassName("product");for(i=0;i<e.length;i++){e[i].click()}}function r(){var e=document.getElementsByClassName("upgrade");for(i=0;i<e.length;i++){e[i].click()}}function s(t,n){if(!e.buttons[t]){return}e.buttons[t].interval=setInterval(n,e.intervalDelay)}function o(t){clearInterval(e.buttons[t].interval)}function u(t,n){if(!e.buttons[t].on){s(t,n);e.buttons[t].on=true;e.buttons[t].element.className="active"}else{o(t);e.buttons[t].on=false;e.buttons[t].element.className=""}}function a(){if(document.getElementById(e.panelId)){document.getElementById(e.panelId).remove()}e.panel=document.createElement("div");e.panel.id=e.panelId;var t=document.createElement("span");t[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=e.panelLabel;e.panel.appendChild(t);document.body.appendChild(e.panel)}function f(t,n,r){if(!e.buttons[t]){return}e.buttons[t].element=document.createElement("button");e.buttons[t].element[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=n;e.buttons[t].element.addEventListener("click",r);e.panel.appendChild(e.buttons[t].element)}function l(){var t=document.createElement("style");t.type="text/css";document.body.appendChild(t);document.getElementsByTagName("head")[0].appendChild(t);var n="#"+e.panelId+"{position:fixed;top:0;right:0;background:#fff;color:#000;padding:5px;z-index:9999;}#"+e.panelId+" button{margin-left: 5px;}#"+e.panelId+' button.active:after{content:"*";color:red;}';t[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=n}var e={panelId:"cookie-cheater",panelLabel:"You're a Cookie Clicker cheater!",intervalDelay:1,buttons:{bigCookie:{label:"Auto-click cookie",action:function(){u("bigCookie",function(){Game.ClickCookie()})}},autoGoldenCookie:{label:"Auto-click golden cookie",action:function(){u("autoGoldenCookie",function(){Game.goldenCookie.click()})}},buyProducts:{label:"Buy products",action:function(){n()}},autoBuyProducts:{label:"Auto-buy products",action:function(){u("autoBuyProducts",function(){n()})}},buyUpgrades:{label:"Buy upgrades",action:function(){r()}},autoBuyUpgrades:{label:"Auto-buy upgrades",action:function(){u("autoBuyUpgrades",function(){r()})}},showGoldenCookieDelay:{label:"Show golden cookie delay in title",action:function(){u("showGoldenCookieDelay",function(){document.title="("+Math.floor(Game.goldenCookie.delay/Game.fps)+" s) "+Beautify(Game.cookies)+" "+(Game.cookies==1?"cookie":"cookies")})}}}};l();a();for(var t in e.buttons){if(!e.buttons[t]){return}f(t,e.buttons[t].label,e.buttons[t].action)}})()
        },
      },
      {
        type: "button",
        text: "Gimkit Answer Solver",
        onclick: () => {
          var answerDatabase = {};var lastQuestion = "";var mx = 0;var my = 0;var lastAnswer = null;var lastAnswerAlphabet = [];alert("Started.");setInterval(() => { var items = document.getElementsByClassName("notranslate lang-en"); if (items.length == 5) { var question = items[0].innerText; var answer1 = items[1]; var answer2 = items[2]; var answer3 = items[3]; var answer4 = items[4]; var answersAlphabet = [answer1.innerText,answer2.innerText,answer3.innerText,answer4.innerText]; answersAlphabet.sort(); lastAnswerAlphabet = answersAlphabet; lastQuestion = question; if (answerDatabase[`${question}_${lastAnswerAlphabet}`] != null) { answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; if (answer1.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer2.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer3.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer4.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } } } else if (items.length == 1) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = items[0].innerText; } else { var divs = document.getElementsByTagName("div"); for (let i = 0; i < divs.length; i++) { if (divs[i].innerHTML.slice(0,2) == "+$" && `${lastQuestion}_${lastAnswerAlphabet}` in answerDatabase == false) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = lastAnswer.innerText; } } }});addEventListener('mousemove', (event) => { mx = event.clientX; my = event.clientY; const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); px = mx/vw; py = my/vh; var possibleQuadrants = [true,true,true,true]; if (py >= 0.74) { possibleQuadrants[0] = false; possibleQuadrants[1] = false; } else { possibleQuadrants[2] = false; possibleQuadrants[3] = false; } if (px >= 0.5) { possibleQuadrants[0] = false; possibleQuadrants[2] = false; } else { possibleQuadrants[1] = false; possibleQuadrants[3] = false; } var quadrant = 0; for (let i = 0; i<4; i++) { if (possibleQuadrants[i] == true) { quadrant = i; } } var items = document.getElementsByClassName("notranslate lang-en"); for (let i = 0; i < items.length; i++) { items[i].style.color = ""; } if (items.length == 5) { lastAnswer = items[quadrant+1]; lastAnswer.style.color = "red"; }});window.onerror = function(msg, url, linenumber) { alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber); return true;}
        },
      },
      {
        type: "button",
        text: "Typing Club Cheat",
        onclick: () => {
          (function(){var wpm = parseInt(prompt("How many WPM do you want the bot to type?"));if(isNaN(wpm)) return alert("Are you sure you entered a number? Try again please.");if(wpm > 150) if(!confirm("Are you sure you want your wpm that high? This could cause you to possibly be detected for cheating or cause you to lag.")) return alert("Ok, exiting.");if(wpm <= 0) return alert("Your WPM cant be that low!");var i = 0;var lastIndex = -1;var cheat = setInterval( () => {if(lastIndex !== core.cur_char_index ) i++;if(i == core.text.length+1) clearInterval(cheat);var wordLength = core.words[core.cur_word_index].char_list.length;core.bound_keypress_handler({key: core.cur_char.chr});}, (12000)/wpm)})();
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Games",
    subfolder: [
      {
        type: "button",
        text: "Snake Game",
        onclick: () => {
          Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("p"));(X=x.style).position="fixed";X.left=X.top=0;X.background="#FFF";x.innerHTML="<p></p><canvas>";v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext("2d"); onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0>e?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++ +10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert("Game Over")):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):"Press P")):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle="hsl("+99*!a[e]+","+2*m +"%,"+50*y +"%)",c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1): p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void F(-1);
        },
      },
      {
        type: "button",
        text: "Breakout",
        onclick: () => {
          alert("--BREAKOUT-- hit the ball to break all the blocks! speeds up every time you break all of them! by dragonmaster73101 a school student who got bored"); var width = window.innerWidth; var height = window.innerHeight; var ballxpos = 683; var ballypos = 200; var randomnum = Math.floor(Math.random() * (2 - 1 + 1) + 1); if (randomnum == 1) { var ballchangex = 1; } if (randomnum == 2) { var ballchangex = -1; } var ballchangey = 1; var ballspeed = 3; var xpos = 683; var ypos = 605; var playerxmove = 0; var playerspeed = 5; var score = 0; var done = 0; var s1width = 180; var s1height = 40; var s1xpos = 1366 / 2; s1xpos = s1xpos - s1width / 2; var s1ypos = 10; var s2width = 180; var s2height = 40; var s2xpos = 1366 / 2; s2xpos = s2xpos - s2width / 2 + s2width + 10; var s2ypos = 10; var s3width = 180; var s3height = 40; var s3xpos = 1366 / 2; s3xpos = s3xpos - s3width / 2 - s3width - 10; var s3ypos = 10; var s4width = 180; var s4height = 40; var s4xpos = 1366 / 2; s4xpos = s4xpos - s4width / 2 - s4width - 10; var s4ypos = 10; s4ypos = s4ypos + s4height + 10; var s5width = 180; var s5height = 40; var s5xpos = 1366 / 2; s5xpos = s5xpos - s5width / 2 + s5width + 10; var s5ypos = 10; s5ypos = s5ypos + s5height + 10; var s6width = 180; var s6height = 40; var s6xpos = 1366 / 2; s6xpos = s6xpos - s6width / 2; var s6ypos = 10; s6ypos = s6ypos + s6height + 10; var s7width = 180; var s7height = 40; var s7xpos = 1366 / 2; s7xpos = s7xpos - s7width / 2 - s7width - 10; var s7ypos = 10; s7ypos = s7ypos + s7height + s7height + 20; var s8width = 180; var s8height = 40; var s8xpos = 1366 / 2; s8xpos = s8xpos - s8width / 2 + s8width + 10; var s8ypos = 10; s8ypos = s8ypos + s8height + 10 + s8height + 10; var s9width = 180; var s9height = 40; var s9xpos = 1366 / 2; s9xpos = s9xpos - s9width / 2; var s9ypos = 10; s9ypos = s9ypos + s9height + 10 + s9height + 10; var s10width = 180; var s10height = 40; var s10xpos = 1366 / 2; s10xpos = s10xpos - s10width / 2 - s10width - 10; var s10ypos = 10; s10ypos = s10ypos + s10height + s10height + s10height + 30; var s11width = 180; var s11height = 40; var s11xpos = 1366 / 2; s11xpos = s11xpos - s11width / 2 + s11width + 10; var s11ypos = 10; s11ypos = s11ypos + s11height + 10 + s11height + 10 + s11height + 10; var s12width = 180; var s12height = 40; var s12xpos = 1366 / 2; s12xpos = s12xpos - s12width / 2; var s12ypos = 10; s12ypos = s12ypos + s12height + 10 + s12height + 10 + s12height + 10; (function() { var me = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(me); me.style.position = 'fixed'; me.style.bottom = '0px'; me.style.right = '0px'; me.style.margin = '0px'; me.style.paddingTop = '0px'; me.style.width = '' + width + 'px'; me.style.height = '20px'; me.style.zIndex = 10000; me.style.opacity = 0.8; me.style.color = 'white'; me.style.backgroundColor = 'black'; me.style.border = '0px solid black'; me.style.textAlign = 'center'; me.style.cursor = 'pointer'; me.id = 'me'; me.style.display = 'circle'; me.innerText = 'by dragonmaster73101'; document.getElementById('me').addEventListener('click', function() { window.open('https://github.com/dragon731012'); }); }()); (function() { var you = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(you); you.style.position = 'fixed'; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; you.style.margin = '0px'; you.style.width = '200px'; you.style.height = '30px'; you.style.zIndex = 10000; you.style.opacity = 1; you.style.color = 'black'; you.style.backgroundColor = 'white'; you.style.border = '2px solid black'; you.style.textAlign = 'center'; you.id = 'you'; you.style.display = 'block'; }()); (function() { var ball = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(ball); ball.style.position = 'fixed'; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; ball.style.margin = '0px'; ball.style.width = '50px'; ball.style.height = '50px'; ball.style.zIndex = 10000; ball.style.opacity = 1; ball.style.color = 'black'; ball.style.backgroundColor = 'white'; ball.style.border = '2px solid black'; ball.style.textAlign = 'center'; ball.id = 'ball'; ball.style.display = 'block'; }()); (function() { var scorer = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(scorer); scorer.style.position = 'fixed'; scorer.style.top = '10px'; scorer.style.left = '10px'; scorer.style.margin = '0px'; scorer.style.width = '100px'; scorer.style.height = '40px'; scorer.style.zIndex = 10000; scorer.style.opacity = 1; scorer.style.color = 'black'; scorer.style.backgroundColor = 'white'; scorer.style.paddingTop = '5px'; scorer.style.border = '3px solid black'; scorer.style.textAlign = 'center'; scorer.id = 'scorer'; scorer.style.display = 'block'; scorer.innerText = 'score: ' + score + ''; }()); function start() { ballspeed = ballspeed + 0.3; playerspeed = playerspeed + 0.3; s1width = 180; s1height = 40; s1xpos = 1366 / 2; s1xpos = s1xpos - s1width / 2; s1ypos = 10; s2width = 180; s2height = 40; s2xpos = 1366 / 2; s2xpos = s2xpos - s2width / 2 + s2width + 10; s2ypos = 10; s3width = 180; s3height = 40; s3xpos = 1366 / 2; s3xpos = s3xpos - s3width / 2 - s3width - 10; s3ypos = 10; s4width = 180; s4height = 40; s4xpos = 1366 / 2; s4xpos = s4xpos - s4width / 2 - s4width - 10; s4ypos = 10; s4ypos = s4ypos + s4height + 10; s5width = 180; s5height = 40; s5xpos = 1366 / 2; s5xpos = s5xpos - s5width / 2 + s5width + 10; s5ypos = 10; s5ypos = s5ypos + s5height + 10; s6width = 180; s6height = 40; s6xpos = 1366 / 2; s6xpos = s6xpos - s6width / 2; s6ypos = 10; s6ypos = s6ypos + s6height + 10; s7width = 180; s7height = 40; s7xpos = 1366 / 2; s7xpos = s7xpos - s7width / 2 - s7width - 10; s7ypos = 10; s7ypos = s7ypos + s7height + s7height + 20; s8width = 180; s8height = 40; s8xpos = 1366 / 2; s8xpos = s8xpos - s8width / 2 + s8width + 10; s8ypos = 10; s8ypos = s8ypos + s8height + 10 + s8height + 10; s9width = 180; s9height = 40; s9xpos = 1366 / 2; s9xpos = s9xpos - s9width / 2; s9ypos = 10; s9ypos = s9ypos + s9height + 10 + s9height + 10; s10width = 180; s10height = 40; s10xpos = 1366 / 2; s10xpos = s10xpos - s10width / 2 - s10width - 10; s10ypos = 10; s10ypos = s10ypos + s10height + s10height + s10height + 30; s11width = 180; s11height = 40; s11xpos = 1366 / 2; s11xpos = s11xpos - s11width / 2 + s11width + 10; s11ypos = 10; s11ypos = s11ypos + s11height + 10 + s11height + 10 + s11height + 10; s12width = 180; s12height = 40; s12xpos = 1366 / 2; s12xpos = s12xpos - s12width / 2; s12ypos = 10; s12ypos = s12ypos + s12height + 10 + s12height + 10 + s12height + 10; (function() { var s1 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s1); s1.style.position = 'fixed'; s1.style.top = '' + s1ypos + 'px'; s1.style.left = '' + s1xpos + 'px'; s1.style.margin = '0px'; s1.style.width = '' + s1width + 'px'; s1.style.height = '' + s1height + 'px'; s1.style.zIndex = 10000; s1.style.opacity = 1; s1.style.color = 'black'; s1.style.backgroundColor = 'green'; s1.style.paddingTop = '5px'; s1.style.border = '3px solid black'; s1.style.textAlign = 'center'; s1.id = 's1'; s1.style.display = 'block'; }()); (function() { var s2 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s2); s2.style.position = 'fixed'; s2.style.top = '' + s2ypos + 'px'; s2.style.left = '' + s2xpos + 'px'; s2.style.margin = '0px'; s2.style.width = '' + s2width + 'px'; s2.style.height = '' + s2height + 'px'; s2.style.zIndex = 10000; s2.style.opacity = 1; s2.style.color = 'black'; s2.style.backgroundColor = 'green'; s2.style.paddingTop = '5px'; s2.style.border = '3px solid black'; s2.style.textAlign = 'center'; s2.id = 's2'; s2.style.display = 'block'; }()); (function() { var s3 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s3); s3.style.position = 'fixed'; s3.style.top = '' + s3ypos + 'px'; s3.style.left = '' + s3xpos + 'px'; s3.style.margin = '0px'; s3.style.width = '' + s3width + 'px'; s3.style.height = '' + s3height + 'px'; s3.style.zIndex = 10000; s3.style.opacity = 1; s3.style.color = 'black'; s3.style.backgroundColor = 'green'; s3.style.paddingTop = '5px'; s3.style.border = '3px solid black'; s3.style.textAlign = 'center'; s3.id = 's3'; s3.style.display = 'block'; }()); (function() { var s7 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s7); s7.style.position = 'fixed'; s7.style.top = '' + s7ypos + 'px'; s7.style.left = '' + s7xpos + 'px'; s7.style.margin = '0px'; s7.style.width = '' + s7width + 'px'; s7.style.height = '' + s7height + 'px'; s7.style.zIndex = 10000; s7.style.opacity = 1; s7.style.color = 'black'; s7.style.backgroundColor = 'orange'; s7.style.paddingTop = '5px'; s7.style.border = '3px solid black'; s7.style.textAlign = 'center'; s7.id = 's7'; s7.style.display = 'block'; }()); (function() { var s8 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s8); s8.style.position = 'fixed'; s8.style.top = '' + s8ypos + 'px'; s8.style.left = '' + s8xpos + 'px'; s8.style.margin = '0px'; s8.style.width = '' + s8width + 'px'; s8.style.height = '' + s8height + 'px'; s8.style.zIndex = 10000; s8.style.opacity = 1; s8.style.color = 'black'; s8.style.backgroundColor = 'orange'; s8.style.paddingTop = '5px'; s8.style.border = '3px solid black'; s8.style.textAlign = 'center'; s8.id = 's8'; s8.style.display = 'block'; }()); (function() { var s9 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s9); s9.style.position = 'fixed'; s9.style.top = '' + s9ypos + 'px'; s9.style.left = '' + s9xpos + 'px'; s9.style.margin = '0px'; s9.style.width = '' + s9width + 'px'; s9.style.height = '' + s9height + 'px'; s9.style.zIndex = 10000; s9.style.opacity = 1; s9.style.color = 'black'; s9.style.backgroundColor = 'orange'; s9.style.paddingTop = '5px'; s9.style.border = '3px solid black'; s9.style.textAlign = 'center'; s9.id = 's9'; s9.style.display = 'block'; }()); (function() { var s6 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s6); s6.style.position = 'fixed'; s6.style.top = '' + s6ypos + 'px'; s6.style.left = '' + s6xpos + 'px'; s6.style.margin = '0px'; s6.style.width = '' + s6width + 'px'; s6.style.height = '' + s6height + 'px'; s6.style.zIndex = 10000; s6.style.opacity = 1; s6.style.color = 'black'; s6.style.backgroundColor = 'orange'; s6.style.paddingTop = '5px'; s6.style.border = '3px solid black'; s6.style.textAlign = 'center'; s6.id = 's6'; s6.style.display = 'block'; }()); (function() { var s5 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s5); s5.style.position = 'fixed'; s5.style.top = '' + s5ypos + 'px'; s5.style.left = '' + s5xpos + 'px'; s5.style.margin = '0px'; s5.style.width = '' + s5width + 'px'; s5.style.height = '' + s5height + 'px'; s5.style.zIndex = 10000; s5.style.opacity = 1; s5.style.color = 'black'; s5.style.backgroundColor = 'orange'; s5.style.paddingTop = '5px'; s5.style.border = '3px solid black'; s5.style.textAlign = 'center'; s5.id = 's5'; s5.style.display = 'block'; }()); (function() { var s4 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s4); s4.style.position = 'fixed'; s4.style.top = '' + s4ypos + 'px'; s4.style.left = '' + s4xpos + 'px'; s4.style.margin = '0px'; s4.style.width = '' + s4width + 'px'; s4.style.height = '' + s4height + 'px'; s4.style.zIndex = 10000; s4.style.opacity = 1; s4.style.color = 'black'; s4.style.backgroundColor = 'orange'; s4.style.paddingTop = '5px'; s4.style.border = '3px solid black'; s4.style.textAlign = 'center'; s4.id = 's4'; s4.style.display = 'block'; }()); (function() { var s10 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s10); s10.style.position = 'fixed'; s10.style.top = '' + s10ypos + 'px'; s10.style.left = '' + s10xpos + 'px'; s10.style.margin = '0px'; s10.style.width = '' + s10width + 'px'; s10.style.height = '' + s10height + 'px'; s10.style.zIndex = 10000; s10.style.opacity = 1; s10.style.color = 'black'; s10.style.backgroundColor = 'orange'; s10.style.paddingTop = '5px'; s10.style.border = '3px solid black'; s10.style.textAlign = 'center'; s10.id = 's10'; s10.style.display = 'block'; }()); (function() { var s11 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s11); s11.style.position = 'fixed'; s11.style.top = '' + s11ypos + 'px'; s11.style.left = '' + s11xpos + 'px'; s11.style.margin = '0px'; s11.style.width = '' + s11width + 'px'; s11.style.height = '' + s11height + 'px'; s11.style.zIndex = 10000; s11.style.opacity = 1; s11.style.color = 'black'; s11.style.backgroundColor = 'orange'; s11.style.paddingTop = '5px'; s11.style.border = '3px solid black'; s11.style.textAlign = 'center'; s11.id = 's11'; s8.style.display = 'block'; }()); (function() { var s12 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s12); s12.style.position = 'fixed'; s12.style.top = '' + s12ypos + 'px'; s12.style.left = '' + s12xpos + 'px'; s12.style.margin = '0px'; s12.style.width = '' + s12width + 'px'; s12.style.height = '' + s12height + 'px'; s12.style.zIndex = 10000; s12.style.opacity = 1; s12.style.color = 'black'; s12.style.backgroundColor = 'orange'; s12.style.paddingTop = '5px'; s12.style.border = '3px solid black'; s12.style.textAlign = 'center'; s12.id = 's12'; s12.style.display = 'block'; }()); function moveball() { if (ballchangex == 1) { ballxpos = ballxpos + ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangey == 1) { ballypos = ballypos + ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangex == -1) { ballxpos = ballxpos - ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangey == -1) { ballypos = ballypos - ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } } function bounce() { if (ballypos >= height - 50) { ballxpos = -9999999999999999999; ballypos = -9999999999999999999999999; ballchangex = 0; ballchangey = 0; clearInterval(bounce); clearInterval(moveplayer); clearInterval(moveball); clearInterval(colliding); alert("game over. your score was " + score + "."); window.location.reload(1); s1.parentNode.removeChild(s1); s1width = 0; s1height = 0; s1xpos = -999999; s1ypos = -999999; s2.parentNode.removeChild(s2); s2width = 0; s2height = 0; s2xpos = -999999; s2ypos = -999999; s3.parentNode.removeChild(s3); s3width = 0; s3height = 0; s3xpos = -999999; s3ypos = -999999; s4.parentNode.removeChild(s4); s4width = 0; s4height = 0; s4xpos = -999999; s4ypos = -999999; s5.parentNode.removeChild(s5); s5width = 0; s5height = 0; s5xpos = -999999; s5ypos = -999999; s6.parentNode.removeChild(s6); s6width = 0; s6height = 0; s6xpos = -999999; s6ypos = -999999; s7.parentNode.removeChild(s7); s7width = 0; s7height = 0; s7xpos = -999999; s7ypos = -999999; s8.parentNode.removeChild(s8); s8width = 0; s8height = 0; s8xpos = -999999; s8ypos = -999999; s9.parentNode.removeChild(s9); s9width = 0; s9height = 0; s9xpos = -999999; s9ypos = -999999; s10.parentNode.removeChild(s10); s10width = 0; s10height = 0; s10xpos = -999999; s10ypos = -999999; s11.parentNode.removeChild(s11); s11width = 0; s11height = 0; s11xpos = -999999; s11ypos = -999999; s12.parentNode.removeChild(s12); s12width = 0; s12height = 0; s12xpos = -999999; s12ypos = -999999; you.parentNode.removeChild(you); ball.parentNode.removeChild(ball); ballchangex = 0; ballchangey = 0; scorer.parentNode.removeChild(scorer); me.parentNode.removeChild(me); return; } if (ballxpos <= 0) { ballchangex = 1; } if (ballypos <= 0) { ballchangey = 1; } if (ballxpos >= width - 50) { ballchangex = -1; } } function moveplayer() { if (playerxmove == 1) { if (xpos + playerspeed >= 1366 - 200) {} else { xpos = xpos + playerspeed; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; } } if (playerxmove == -1) { if (xpos + playerspeed <= 0) {} else { xpos = xpos - playerspeed; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; } } } window.addEventListener("keydown", function(event) { if (event.key == "ArrowLeft") { playerxmove = -1; } if (event.key == "ArrowRight") { playerxmove = 1; } }); window.addEventListener("keyup", function(event) { if (event.key == "ArrowLeft") { playerxmove = 0; } if (event.key == "ArrowRight") { playerxmove = 0; } }); function colliding() { if (ballxpos < s1xpos + s1width && ballxpos + 50 > s1xpos && ballypos < s1ypos + s1height && ballypos + 50 > s1ypos) { score = score + 1; done = done + 1; s1.parentNode.removeChild(s1); s1width = 0; s1height = 0; s1xpos = -999999; s1ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s2xpos + s2width && ballxpos + 50 > s2xpos && ballypos < s2ypos + s2height && ballypos + 50 > s2ypos) { score = score + 1; done = done + 1; s2.parentNode.removeChild(s2); s2width = 0; s2height = 0; s2xpos = -999999; s2ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s3xpos + s3width && ballxpos + 50 > s3xpos && ballypos < s3ypos + s3height && ballypos + 50 > s3ypos) { score = score + 1; done = done + 1; s3.parentNode.removeChild(s3); s3width = 0; s3height = 0; s3xpos = -999999; s3ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s4xpos + s4width && ballxpos + 50 > s4xpos && ballypos < s4ypos + s4height && ballypos + 50 > s4ypos) { score = score + 1; done = done + 1; s4.parentNode.removeChild(s4); s4width = 0; s4height = 0; s4xpos = -999999; s4ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s5xpos + s5width && ballxpos + 50 > s5xpos && ballypos < s5ypos + s5height && ballypos + 50 > s5ypos) { score = score + 1; done = done + 1; s5.parentNode.removeChild(s5); s5width = 0; s5height = 0; s5xpos = -999999; s5ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s6xpos + s6width && ballxpos + 50 > s6xpos && ballypos < s6ypos + s6height && ballypos + 50 > s6ypos) { score = score + 1; done = done + 1; s6.parentNode.removeChild(s6); s6width = 0; s6height = 0; s6xpos = -999999; s6ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s7xpos + s7width && ballxpos + 50 > s7xpos && ballypos < s7ypos + s7height && ballypos + 50 > s7ypos) { score = score + 1; done = done + 1; s7.parentNode.removeChild(s7); s7width = 0; s7height = 0; s7xpos = -999999; s7ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s8xpos + s8width && ballxpos + 50 > s8xpos && ballypos < s8ypos + s8height && ballypos + 50 > s8ypos) { score = score + 1; done = done + 1; s8.parentNode.removeChild(s8); s8width = 0; s8height = 0; s8xpos = -999999; s8ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s9xpos + s9width && ballxpos + 50 > s9xpos && ballypos < s9ypos + s9height && ballypos + 50 > s9ypos) { score = score + 1; done = done + 1; s9.parentNode.removeChild(s9); s9width = 0; s9height = 0; s9xpos = -999999; s9ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s12xpos + s12width && ballxpos + 50 > s12xpos && ballypos < s12ypos + s12height && ballypos + 50 > s12ypos) { score = score + 1; done = done + 1; s12.parentNode.removeChild(s12); s12width = 0; s12height = 0; s12xpos = -999999; s12ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s11xpos + s11width && ballxpos + 50 > s11xpos && ballypos < s11ypos + s11height && ballypos + 50 > s11ypos) { score = score + 1; done = done + 1; s11.parentNode.removeChild(s11); s11width = 0; s11height = 0; s11xpos = -999999; s11ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s10xpos + s10width && ballxpos + 50 > s10xpos && ballypos < s10ypos + s10height && ballypos + 50 > s10ypos) { score = score + 1; done = done + 1; s10.parentNode.removeChild(s10); s10width = 0; s10height = 0; s10xpos = -999999; s10ypos = -999999; ballchangey = ballchangey * -1; } scorer.innerText = 'score: ' + score + ''; } setInterval(colliding, 5); setInterval(moveball, 15); setInterval(bounce, 3); setInterval(moveplayer, 15); } start(); function next() { if (done >= 12) { start(); done = 0; } } function hit() { if (xpos < ballxpos + 50 && xpos + 200 > ballxpos && ypos < ballypos + 50 && ypos + 30 > ballypos) { if (xpos+35>ballxpos){ ballchangex = -1; } if (xpos+165<ballxpos){ ballchangex = 1; } ballchangey = -1; } } setInterval(next, 2); setInterval(hit, 2);
        },
      },
      {
        type: "button",
        text: "Dots Game",
        onclick: () => {
          (function(){ const dot = (function(){ function dot(size = null, startPosX = null, startPosY = null, xDir = null, yDir = null, speed = null, color = null){ this.size = (size !== null) ? size : 150; this.minSize = 60; this.colChange = 80; this.x = (startPosX !== null) ? startPosX : Math.random() * (window.innerWidth - this.size); this.y = (startPosY !== null) ? startPosY : Math.random() * (window.innerHeight - this.size); this.maxX = window.innerWidth; this.maxY = window.innerHeight; this.xDir = (xDir !== null) ? xDir : 1; this.yDir = (yDir !== null) ? yDir : 1; this.speed = (speed !== null) ? speed : 1; this.shrink = 20; this.color = (color !== null) ? color : '#70a6ff'; this.dot = document.createElement('div'); this.dot.style.width = this.dot.style.height = `${this.size}px`; this.dot.style.border = `1px solid ${this.color}`; this.dot.style.backgroundColor = `${this.color}1A`; this.dot.style.position = 'fixed'; this.dot.style.zIndex = '99999999'; this.dot.style.top = `${this.x}px`; this.dot.style.left = `${this.y}px`; this.dot.style.borderRadius = '90px'; document.body.appendChild(this.dot); this.dot.addEventListener('mousedown', () => { this.size -= this.shrink; if (this.size > this.minSize){ this.speed += 0.3; this.dot.style.width = this.dot.style.height = `${this.size}px`; this.x = this.x + ((this.shrink / 2) * this.xDir); this.y = this.y + ((this.shrink / 2) * this.yDir); this.dot.style.left = `${this.x}px`; this.dot.style.top = `${this.y}px`; console.log(this.size); this.color = (this.size < this.colChange) ? '#ff0000' : this.color; this.dot.style.border = `1px solid ${this.color}`; this.dot.style.backgroundColor = `${this.color}1A`; window.dotStats.dotspopped++; let newXDir = (Math.round(Math.random()) === 1) ? 1 : -1; let newYDir = (Math.round(Math.random()) === 1) ? 1 : -1; window.dots.push(new dot(this.size, this.x, this.y, newXDir, newYDir, (this.speed+(Math.random()/0.5)), this.color)); } if (this.size < this.minSize){ window.clearInterval(this.move); this.dot.remove(); } }, false); this.move = window.setInterval(() => { this.x += (this.xDir * this.speed); if (this.x >= (this.maxX - this.size))this.xDir = -1; if (this.x <= 0) this.xDir = 1; this.y += (this.yDir * this.speed); if (this.y >= (this.maxY - this.size))this.yDir = -1; if (this.y <= 0) this.yDir = 1; this.dot.style.left = `${this.x}px`; this.dot.style.top = `${this.y}px`; }, 10); } return dot; })(); if (window.dots){ window.dots.push(new dot()); window.dotStats.basedots++; } else { window.dots = [new dot()]; window.dotStats = { basedots: 1, clicks: 0, dotspopped: 0 }; window.addEventListener('mousedown', () => { window.dotStats.clicks++; window.updateStats(); }, false); let ds = document.createElement('div'); ds.setAttribute('id', 'dotStats'); ds.style.position = 'fixed'; ds.style.right = '0px'; ds.style.top = '0px'; ds.style.zIndex = '9999999'; ds.style.textAlign = 'right'; ds.style.padding = '20px'; ds.style.backgroundColor = '#fff'; ds.style.border = '1px solid #ccc'; ds.style.color = '#090909'; ds.style.fontFamily = 'Arial, Helvetica, sans-serif'; document.body.appendChild(ds); window.updateStats = function(){ document.getElementById('dotStats').innerHTML = `Big dots spawned: ${window.dotStats.basedots}<br/> Dots popped: ${window.dotStats.dotspopped}<br/> Misses: ${window.dotStats.clicks - window.dotStats.dotspopped}`; }; } window.updateStats(); })();
        },
      },
      {
        type: "button",
        text: "Coin Clicker",
        onclick: () => {
          alert("Coin Clicker. rules: click the coins as fast as bossible before the time runs out! errors: sorry, there is a bug where a coin appears and cannot be clicked. Im trying to fix that. if it happens, just start over."); var x=0; var points=0; var timer=31; var timermax=31; var op='block'; (function () { var score = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(score); score.style.position = 'fixed'; score.style.top = '350px'; score.style.left = '0px'; score.style.margin = '10px'; score.style.paddingTop = '0px'; score.style.width = '150px'; score.style.height = '30px'; score.style.zIndex = 10000; score.style.opacity = 1; score.style.color = 'black'; score.style.backgroundColor = 'white'; score.style.border = '5px solid black'; score.style.textAlign = 'center'; score.id = 'score'; score.style.display = op; score.innerText = 'score: '+points+''; }()); (function () { var me = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(me); me.style.position = 'fixed'; me.style.top = '390px'; me.style.left = '0px'; me.style.margin = '10px'; me.style.paddingTop = '0px'; me.style.width = '340px'; me.style.height = '30px'; me.style.zIndex = 10000; me.style.opacity = 1; me.style.color = 'black'; me.style.backgroundColor = 'white'; me.style.border = '5px solid black'; me.style.textAlign = 'center'; me.id = 'me'; me.style.display = op; me.innerText = 'by dragonmaster73101'; document.getElementById('me').addEventListener('click', function() { window.open("https://github.com/dragon731012"); }); }()); (function () { var elem = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(elem); elem.style.position = 'fixed'; elem.style.top = '0px'; elem.style.left = '0px'; elem.style.margin = '10px'; elem.style.paddingTop = '10px'; elem.style.width = '340px'; elem.style.height = '340px'; elem.style.zIndex = 10000; elem.style.opacity = 1; elem.style.color = 'green'; elem.style.backgroundColor = 'green'; elem.style.border = '0px solid white'; elem.style.textAlign = 'center'; elem.id = 'myTimer'; elem.style.display = op; }()); function mole(x,y){ (function () { var elem = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(elem); elem.style.position = 'fixed'; elem.style.top = ''+y+'px'; elem.style.left = ''+x+'px'; elem.style.margin = '10px'; elem.style.paddingTop = '0px'; elem.style.width = '40px'; elem.style.height = '40px'; elem.style.zIndex = 10000; elem.style.opacity = 1; elem.style.color = 'yellow'; elem.style.backgroundColor = 'yellow'; elem.style.border = '0px solid white'; elem.style.textAlign = 'center'; elem.style.cursor = 'pointer'; elem.id = 'coin'+x+''; elem.style.display = op; document.getElementById('coin'+x+'').addEventListener('click', function() { points=points+1; timermax=timermax-2; var timer=timermax; if (timermax<3){ var timermax=2; } makecoin(); elem.style.left='-99999999999999999999999999999999999px'; score.innerText = 'score: '+points+''; }); x=x+1; }()); } function makecoin(){ var rx=Math.floor(Math.random()*(300-0+1)+0); var ry=Math.floor(Math.random()*(300-0+1)+0); mole(rx,ry); } function check(){ (function(){ var time = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(time); timer=timer-1; if (timer<0){ op='none'; alert("game over. your score was "+points+"."); clearInterval(check); window.location.reload(1); timer=99999999999999999999999999999999999; } time.style.position = 'fixed'; time.style.top = '350px'; time.style.left = '160px'; time.style.margin = '10px'; time.style.paddingTop = '0px'; time.style.width = '180px'; time.style.height = '30px'; time.style.zIndex = 10000; time.style.opacity = 1; time.style.color = 'black'; time.style.backgroundColor = 'white'; time.style.border = '5px solid black'; time.style.textAlign = 'center'; time.id = 'time'; time.style.display = op; time.innerText = 'timer: '+timer+''; }()); } makecoin(); setInterval(check,1000);
        },
      },
      {
        type: "button",
        text: "Dodge the Rectangle",
        onclick: () => {
          alert("--DODGYSQUARE--rules: use the left and right arrow keys, to dodge the red squares. the red squares get really fast, so be careful!"); var xpos=80; var ypos=350; var enemyxpos=0; var enemyypos=-120; var enemyspeed=2.5; var playerspeed=4; var scorecount=0; var left=0; var right=0; (function () { var bg = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(bg); bg.style.position = 'fixed'; bg.style.top = '0px'; bg.style.left = '0px'; bg.style.margin = '0px'; bg.style.paddingTop = '10px'; bg.style.width = '300px'; bg.style.height = '500px'; bg.style.zIndex = 10000; bg.style.opacity = 1; bg.style.color = 'white'; bg.style.backgroundColor = 'black'; bg.style.border = '0px solid white'; bg.style.textAlign = 'center'; bg.id = 'bg'; bg.style.display = 'block'; bg.innerText = ''; }()); (function () { var me = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(me); me.style.position = 'fixed'; me.style.top = '535px'; me.style.left = '0px'; me.style.margin = '0px'; me.style.paddingTop = '5px'; me.style.width = '300px'; me.style.height = '35px'; me.style.zIndex = 10000; me.style.opacity = 1; me.style.color = 'black'; me.style.backgroundColor = 'white'; me.style.border = '4px solid black'; me.style.textAlign = 'center'; me.id = 'me'; me.style.display = 'block'; me.innerText = 'by dragonmaster73101'; document.getElementById('me').addEventListener('click',function(){ window.open('https://github.com/dragon731012'); }); }()); (function () { var score = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(score); score.style.position = 'fixed'; score.style.top = '500px'; score.style.left = '0px'; score.style.margin = '0px'; score.style.paddingTop = '5px'; score.style.width = '300px'; score.style.height = '35px'; score.style.zIndex = 10000; score.style.opacity = 1; score.style.color = 'black'; score.style.backgroundColor = 'white'; score.style.border = '4px solid black'; score.style.textAlign = 'center'; score.id = 'score'; score.style.display = 'block'; score.innerText = 'score: '+scorecount+''; }()); (function () { var you = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(you); you.style.position = 'fixed'; you.style.top = ''+ypos+'px'; you.style.left = ''+xpos+'px'; you.style.margin = '0px'; you.style.paddingTop = '10px'; you.style.width = '70px'; you.style.height = '120px'; you.style.zIndex = 10000; you.style.opacity = 1; you.style.color = 'blue'; you.style.backgroundColor = 'blue'; you.style.border = '0px solid white'; you.style.textAlign = 'center'; you.id = 'you'; you.style.display = 'block'; you.innerText = ''; function mover(){ if (left==1){ if (xpos-12>=0){ xpos=xpos-playerspeed; you.style.left = ''+xpos+'px'; } } if (right==1){ if (xpos+10<=230){ xpos=xpos+playerspeed; you.style.left = ''+xpos+'px'; } } } setInterval(mover,5); window.addEventListener("keydown",function(event){ if(event.key=="ArrowLeft"){ left=1; } }); window.addEventListener("keyup",function(event){ if(event.key=="ArrowLeft"){ left=0; } }); window.addEventListener("keydown",function(event){ if(event.key=="ArrowRight"){ right=1; } }); window.addEventListener("keyup",function(event){ if(event.key=="ArrowRight"){ right=0; } }); }()); function makeenemy(){ (function () { var enemy = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(enemy); enemyxpos=Math.floor(Math.random()*(230-0+1)+0); enemyypos=-120; enemy.style.position = 'fixed'; enemy.style.top = ''+enemyypos+'px'; enemy.style.left = ''+enemyxpos+'px'; enemy.style.margin = '0px'; enemy.style.paddingTop = '10px'; enemy.style.width = '70px'; enemy.style.height = '120px'; enemy.style.zIndex = 10000; enemy.style.opacity = 1; enemy.style.color = 'red'; enemy.style.backgroundColor = 'red'; enemy.style.border = '0px solid white'; enemy.style.textAlign = 'center'; enemy.id = 'enemy'; enemy.style.display = 'block'; enemy.innerText = ''; function enemymove(){ enemyypos=enemyypos+enemyspeed; enemy.style.top = ''+enemyypos+'px'; if (enemyypos>380){ enemy.parentNode.removeChild(enemy); scorecount=scorecount+1; score.innerText = 'score: '+scorecount+''; makeenemy(); } } setInterval(enemymove,50); }()); } makeenemy(); function colliding() { if (xpos < enemyxpos + 70 && xpos + 70 > enemyxpos && ypos < enemyypos + 120 && ypos + 120 > enemyypos) { clearInterval(colliding); document.getElementById("enemy"); enemy.parentNode.removeChild(enemy); document.getElementById("you"); you.parentNode.removeChild(you); document.getElementById("bg"); bg.parentNode.removeChild(bg); document.getElementById("score"); score.parentNode.removeChild(score); document.getElementById("me"); me.parentNode.removeChild(me); alert("game over. your score was "+scorecount+"."); } } setInterval(colliding,5);
        },
      },
      {
        type: "button",
        text: "Guess the Number",
        onclick: () => {
          var x=0;alert("Guess A Number Between 1 And 20");function getRandomNumberBetween(min,max){ return Math.floor(Math.random()*(max-min+1)+min); };a=getRandomNumberBetween(0,21);while (true){v=prompt("What Number Do You Guess?");if (v==a){x=x+1;alert("You Got It! It Only Took You "+x+" Tries!");break} else if (v>20){alert("Please Guess A Number Between Or Equal To 1 And 20!")} else if (v<1){alert("Please Guess A Number Between Or Equal To 1 And 20!")} else if (v>a){x=x+1;alert("Too High!")} else if (v<a){x=x+1;alert("Too Low!")}};
        },
      },
      {
        type: "button",
        text: "Jumpy Square",
        onclick: () => {
          alert("Press The Up Arrow To Dodge The Red Squares And Get Points! Jump Speeds Up At 5 Points. Please Check Out My Github Profile And Star Some Resporitories. Thanks!"); (function(){var me=document.createElement('div');var body=document.getElementsByTagName('body')[0];body.appendChild(me);me.style.position='fixed';me.style.bottom='0px';me.style.right='0px';me.style.margin='0px';me.style.paddingTop='0px';me.style.width='1366px';me.style.height='20px';me.style.zIndex=10000;me.style.opacity=0.8;me.style.color='white';me.style.backgroundColor='black';me.style.border='0px solid black';me.style.textAlign='center';me.style.cursor='pointer';me.id='me';me.style.display='circle';me.innerText='by dragonmaster73101';document.getElementById('me').addEventListener('click',function(){window.open('https://github.com/dragon731012');});}()); var xpos = 70; var ypos = 400; var enemyspeed = 8; var enemyxpos = 1406; var enemyypos = 420; var jumping=0; var speedallowed=1; var playerspeed=2.5; var speedup=0; var enemywidth=0; var scorecount=0; function makeyou() { var you = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(you); you.style.position = 'fixed'; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; you.style.margin = '10px'; you.style.paddingTop = '10px'; you.style.width = '70px'; you.style.height = '70px'; you.style.zIndex = 10000; you.style.opacity = 1; you.style.color = 'black'; you.style.backgroundColor = 'black'; you.style.border = '0px solid white'; you.style.textAlign = 'center'; you.id = 'you'; you.style.display = 'block'; function goup() { if (jumping==0){ setInterval(function() { if (jumping==0){ if (ypos != 220){ if (jumping==0){ ypos=ypos-playerspeed; you.style.top = '' + ypos + 'px'; } } else{ jumping=1; return; } } if (jumping==1){ if (ypos != 400){ if (jumping==1){ ypos=ypos+playerspeed; you.style.top = '' + ypos + 'px'; } } else{ speedallowed=1; return; } } }, 15); } } goup(); window.addEventListener("keydown", function(event) { if (event.key == "ArrowUp") { if (ypos == 400){ speedallowed=0; jumping=0; } } }); } makeyou(); (function() { var ground = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(ground); ground.style.position = 'fixed'; ground.style.top = '480px'; ground.style.left = '0px'; ground.style.margin = '0px'; ground.style.paddingTop = '10px'; ground.style.width = '999999px'; ground.style.height = '5px'; ground.style.zIndex = 10000; ground.style.opacity = 1; ground.style.color = 'gray'; ground.style.backgroundColor = 'gray'; ground.style.border = '0px solid white'; ground.style.textAlign = 'center'; ground.id = 'ground'; ground.style.display = 'block'; }()); function makeenemy() { (function() { var enemy = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(enemy); enemywidth=Math.floor(Math.random()*(160-40+1)+160); enemy.style.position = 'fixed'; enemy.style.top = '' + enemyypos + 'px'; enemy.style.left = '' + enemyxpos + 'px'; enemy.style.margin = '0px'; enemy.style.paddingTop = '10px'; enemy.style.width = ''+enemywidth+'px'; enemy.style.height = '60px'; enemy.style.zIndex = 10000; enemy.style.opacity = 1; enemy.style.color = 'red'; enemy.style.backgroundColor = 'red'; enemy.style.border = '0px solid white'; enemy.style.textAlign = 'center'; enemy.id = 'enemy'; enemy.style.display = 'block'; }()); } makeenemy(); function move() { document.getElementById("enemy"); enemyxpos = enemyxpos - enemyspeed; enemy.style.left = '' + enemyxpos + 'px'; if (enemyxpos <= -160) { speedup=speedup+1; scorecount=scorecount+1; score.innerText='score: '+scorecount+''; document.getElementById("enemy"); enemy.parentNode.removeChild(enemy); enemyxpos = 1406; if (speedup<8){ enemyspeed=enemyspeed+1; } makeenemy(); } } setInterval(move, 20); (function() { var score = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(score); score.style.position = 'fixed'; score.style.top = '0px'; score.style.left = '0px'; score.style.margin = '10px'; score.style.paddingTop = '0px'; score.style.width = '100px'; score.style.height = '30px'; score.style.zIndex = 10000; score.style.opacity = 1; score.style.color = 'black'; score.style.backgroundColor = 'white'; score.style.border = '4px solid black'; score.style.textAlign = 'center'; score.id = 'score'; score.innerText='score: '+scorecount+''; score.style.display = 'block'; }()); function colliding() { if (xpos < enemyxpos + enemywidth && xpos + 70 > enemyxpos && ypos < enemyypos + 60 && ypos + 70 > enemyypos) { alert("Game Over! Your Score Was "+scorecount+" Good Job!"); xpos=xpos-99999999999999999999999999999999999999999999999999999999999999999999999; clearInterval(colliding); clearInterval(tick); document.getElementById("enemy"); enemy.parentNode.removeChild(enemy); document.getElementById("you"); you.parentNode.removeChild(you); document.getElementById("ground"); ground.parentNode.removeChild(ground); document.getElementById("me"); me.parentNode.removeChild(me); document.getElementById("score"); score.parentNode.removeChild(score); } } function tick(){ if (speedup>=5){ if (speedallowed==1){ playerspeed=5; } } } setInterval(colliding,5); setInterval(tick,15);
        },
      },
      {
        type: "button",
        text: "Ping Pong",
        onclick: () => {
          (function(){var me=document.createElement('div');var body=document.getElementsByTagName('body')[0];body.appendChild(me);me.style.position='fixed';me.style.bottom='0px';me.style.right='0px';me.style.margin='0px';me.style.paddingTop='0px';me.style.width='1366px';me.style.height='20px';me.style.zIndex=10000;me.style.opacity=0.8;me.style.color='white';me.style.backgroundColor='black';me.style.border='0px solid black';me.style.textAlign='center';me.style.cursor='pointer';me.id='me';me.style.display='circle';me.innerText='by dragonmaster73101';document.getElementById('me').addEventListener('click',function(){window.open('https://github.com/dragon731012');});}()); var xmove=1; var startnum=Math.floor(Math.random()*(10-1+1)+1); startnum=startnum/10; var ymove=startnum; var xpos=1366/2; var ypos=665/2; var ballspeed=3; var p1ypos=665/2; var p1xpos=80; var p1ymove=0; var playerspeed=6; var p2ymove=0; var p2ypos=665/2; var p2xpos=1366-80; var ailevel=400; (function () { var ball = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(ball); ball.style.position = 'fixed'; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; ball.style.margin = '0px'; ball.style.paddingTop = '10px'; ball.style.width = '30px'; ball.style.height = '30px'; ball.style.zIndex = 10000; ball.style.opacity = 1; ball.style.color = 'white'; ball.style.backgroundColor = 'white'; ball.style.textAlign = 'center'; ball.style.cursor = 'pointer'; ball.style.border = '2px solid black'; ball.id = 'ball'; ball.style.display = 'block'; ball.innerText = ''; }()); (function () { var p1 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(p1); p1.style.position = 'fixed'; p1.style.top = ''+p1ypos+'px'; p1.style.left = ''+p1xpos+'px'; p1.style.margin = '0px'; p1.style.paddingTop = '10px'; p1.style.width = '20px'; p1.style.height = '100px'; p1.style.zIndex = 10000; p1.style.opacity = 1; p1.style.color = 'white'; p1.style.backgroundColor = 'white'; p1.style.textAlign = 'center'; p1.style.cursor = 'pointer'; p1.style.border = '2px solid black'; p1.id = 'p1'; p1.style.display = 'block'; p1.innerText = ''; }()); (function () { var p2 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(p2); p2.style.position = 'fixed'; p2.style.top = ''+p2ypos+'px'; p2.style.left = ''+p2xpos+'px'; p2.style.margin = '0px'; p2.style.paddingTop = '10px'; p2.style.width = '20px'; p2.style.height = '100px'; p2.style.zIndex = 10000; p2.style.opacity = 1; p2.style.color = 'white'; p2.style.backgroundColor = 'white'; p2.style.textAlign = 'center'; p2.style.cursor = 'pointer'; p2.style.border = '2px solid black'; p2.id = 'p2'; p2.style.display = 'block'; p2.innerText = ''; }()); function move(){ if (p2ymove==1){ if (p2ypos+playerspeed <= 565){ p2ypos=p2ypos+playerspeed; p2.style.top = ''+p2ypos+'px'; } } if (p2ymove==-1){ if (p2ypos-playerspeed >= 0){ p2ypos=p2ypos-playerspeed; p2.style.top = ''+p2ypos+'px'; } } if (p1ymove==1){ if (p1ypos+playerspeed <= 565){ p1ypos=p1ypos+playerspeed; p1.style.top = ''+p1ypos+'px'; } } if (p1ymove==-1){ if (p1ypos-playerspeed >= 0){ p1ypos=p1ypos-playerspeed; p1.style.top = ''+p1ypos+'px'; } } if (xmove==1){ xpos=xpos+ballspeed; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } if (xmove==-1){ xpos=xpos-ballspeed; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } if (ymove==-1){ ypos=ypos-ballspeed; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } if (ymove==1){ ypos=ypos+ballspeed; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } if (ymove>-1 && ymove<0){ ypos=ypos-ymove*3; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } if (ymove<1 && ymove>0){ ypos=ypos-ymove*3; ball.style.top = ''+ypos+'px'; ball.style.left = ''+xpos+'px'; } } function bounce(){ if (xpos>=1336){ xpos=-99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999; clearInterval(bounce); ball.parentNode.removeChild(ball); p1.parentNode.removeChild(p1); p2.parentNode.removeChild(p2); me.parentNode.removeChild(me); clearInterval(move); clearInterval(movep2); clearInterval(colliding); alert("Game Over! You Win Good Job!"); } if (xpos<=0){ xpos=99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999; clearInterval(bounce); ball.parentNode.removeChild(ball); me.parentNode.removeChild(me); p1.parentNode.removeChild(p1); p2.parentNode.removeChild(p2); clearInterval(move); clearInterval(movep2); clearInterval(colliding); alert("Game Over! You Lose But Good Try!"); } if (ypos>=635){ ymove=ymove*-1; } if (ypos<=0){ ymove=ymove*-1; } } function colliding(){ if (xpos < p1xpos + 20 && xpos + 30 > p1xpos && ypos < p1ypos + 100 && ypos + 30 > p1ypos) { xmove=xmove*-1; ballspeed=ballspeed+0.5; } if (xpos < p2xpos + 20 && xpos + 30 > p2xpos && ypos < p2ypos + 100 && ypos + 30 > p2ypos) { xmove=xmove*-1; ballspeed=ballspeed+0.5; } } window.addEventListener("keydown", function(event) { if (event.key == "ArrowUp") { p1ymove=-1; } }); window.addEventListener("keyup", function(event) { if (event.key == "ArrowUp") { p1ymove=0; } }); window.addEventListener("keydown", function(event) { if (event.key == "ArrowDown") { p1ymove=1; } }); window.addEventListener("keyup", function(event) { if (event.key == "ArrowDown") { p1ymove=0; } }); function movep2(){ if (xpos>683){ if (ypos<p2ypos){ if (p2ypos != ypos){ p2ymove=-1; } } if (ypos>p2ypos){ if (p2ypos != ypos){ p2ymove=1; } } } if (xpos<=683){ p2ymove=0; } } setInterval(colliding,15); setInterval(move,15); setInterval(bounce,15); setInterval(movep2,5);
        },
      },
      {
        type: "button",
        text: "Rock, Paper, Scissors",
        onclick: () => {
           var playerNum = prompt('Rock, Paper, Or Scissors?\n\n1 - Rock\n2 - Paper\n3 - Scissors'); var computerNum = Math.floor(Math.random() * 3) + 1; switch(playerNum) { case '1': var playerChoice = 'Rock'; break; case '2': var playerChoice = 'Paper'; break; case '3': var playerChoice = 'Scissors'; break; default: alert('Incorrect Input! '); break;} alert('Computer Is Choosing...'); switch(computerNum) { case 1: var computerChoice = 'Rock'; break; case 2: var computerChoice = 'Paper'; break; case 3: var computerChoice = 'Scissors'; break;} if (playerNum == 1) { if (computerNum == 1) { alert('Tie!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 2) { alert('You lost!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 3) { alert('You Won!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); }} if (playerNum == 2) { if (computerNum == 1) { alert('You Won!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 2) { alert('Tie!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 3) { alert('You Lost!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); }} if (playerNum == 3) { if (computerNum == 1) { alert('You Lost!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 2) { alert('You Won!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); } if (computerNum == 3) { alert('Tie!\nYou Chose ' + playerChoice + ' And The Computer Chose ' + computerChoice); }};
        },
      },
      {
        type: "button",
        text: "Simon Says",
        onclick: () => {
          const list=[]; var counted=0; var maxcount=4; var num=0; var allclicked=0; var clicked=0; var score=0; function gameover(){ alert("game over. your score was "+score+"."); green.parentNode.removeChild(green); blue.parentNode.removeChild(blue); yellow.parentNode.removeChild(yellow); red.parentNode.removeChild(red); me.parentNode.removeChild(me); scorer.parentNode.removeChild(scorer); } (function () { var green = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(green); green.style.position = 'fixed'; green.style.top = '0px'; green.style.left = '0px'; green.style.margin = '10px'; green.style.paddingTop = '40px'; green.style.width = '100px'; green.style.height = '100px'; green.style.zIndex = 10000; green.style.opacity = 0.6; green.style.color = 'black'; green.style.backgroundColor = 'green'; green.style.border = '0px solid white'; green.style.textAlign = 'center'; green.style.cursor = 'pointer'; green.id = 'green'; green.style.display = 'block'; green.innerText = 'green'; document.getElementById('green').addEventListener('click', function() { green.style.opacity = 1; if (list[clicked] != 1){ gameover(); } clicked=clicked+1; setTimeout(function() { green.style.opacity = 0.6; }, 500); }); }()); (function () { var red = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(red); red.style.position = 'fixed'; red.style.top = '0px'; red.style.left = '110px'; red.style.margin = '10px'; red.style.paddingTop = '40px'; red.style.width = '100px'; red.style.height = '100px'; red.style.zIndex = 10000; red.style.opacity = 0.6; red.style.color = 'black'; red.style.backgroundColor = 'red'; red.style.border = '0px solid white'; red.style.textAlign = 'center'; red.style.cursor = 'pointer'; red.id = 'red'; red.style.display = 'block'; red.innerText = 'red'; document.getElementById('red').addEventListener('click', function() { red.style.opacity = 1; if (list[clicked] != 2){ gameover(); } clicked=clicked+1; setTimeout(function() { red.style.opacity = 0.6; }, 500); }); }()); (function () { var yellow = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(yellow); yellow.style.position = 'fixed'; yellow.style.top = '110px'; yellow.style.left = '0px'; yellow.style.margin = '10px'; yellow.style.paddingTop = '40px'; yellow.style.width = '100px'; yellow.style.height = '100px'; yellow.style.zIndex = 10000; yellow.style.opacity = 0.6; yellow.style.color = 'black'; yellow.style.backgroundColor = 'yellow'; yellow.style.border = '0px solid white'; yellow.style.textAlign = 'center'; yellow.style.cursor = 'pointer'; yellow.id = 'yellow'; yellow.style.display = 'block'; yellow.innerText = 'yellow'; document.getElementById('yellow').addEventListener('click', function() { yellow.style.opacity = 1; if (list[clicked] != 3){ gameover(); } clicked=clicked+1; setTimeout(function() { yellow.style.opacity = 0.6; }, 500); }); }()); (function () { var blue = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(blue); blue.style.position = 'fixed'; blue.style.top = '110px'; blue.style.left = '110px'; blue.style.margin = '10px'; blue.style.paddingTop = '40px'; blue.style.width = '100px'; blue.style.height = '100px'; blue.style.zIndex = 10000; blue.style.opacity = 0.6; blue.style.color = 'black'; blue.style.backgroundColor = 'blue'; blue.style.border = '0px solid white'; blue.style.textAlign = 'center'; blue.style.cursor = 'pointer'; blue.id = 'blue'; blue.style.display = 'block'; blue.innerText = 'blue'; document.getElementById('blue').addEventListener('click', function() { blue.style.opacity = 1; if (list[clicked] != 4){ gameover(); } clicked=clicked+1; setTimeout(function() { blue.style.opacity = 0.6; }, 500); }); }()); (function () { var me = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(me); me.style.position = 'fixed'; me.style.top = '260px'; me.style.left = '0px'; me.style.margin = '10px'; me.style.paddingTop = '0px'; me.style.width = '210px'; me.style.height = '30px'; me.style.zIndex = 10000; me.style.opacity = 1; me.style.color = 'black'; me.style.backgroundColor = 'white'; me.style.border = '4px solid black'; me.style.textAlign = 'center'; me.style.cursor = 'pointer'; me.id = 'me'; me.style.display = 'block'; me.innerText = 'by dragonmaster73101'; document.getElementById('me').addEventListener('click', function() { window.open("https://github.com/dragon731012"); }); }()); (function () { var scorer = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(scorer); scorer.style.position = 'fixed'; scorer.style.top = '300px'; scorer.style.left = '0px'; scorer.style.margin = '10px'; scorer.style.paddingTop = '0px'; scorer.style.width = '210px'; scorer.style.height = '30px'; scorer.style.zIndex = 10000; scorer.style.opacity = 1; scorer.style.color = 'black'; scorer.style.backgroundColor = 'white'; scorer.style.border = '4px solid black'; scorer.style.textAlign = 'center'; scorer.style.cursor = 'pointer'; scorer.id = 'scorer'; scorer.style.display = 'block'; scorer.innerText = 'score: '+score+''; }()); (function () { var start = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(start); start.style.position = 'fixed'; start.style.top = '220px'; start.style.left = '0px'; start.style.margin = '10px'; start.style.paddingTop = '0px'; start.style.width = '210px'; start.style.height = '30px'; start.style.zIndex = 10000; start.style.opacity = 1; start.style.color = 'black'; start.style.backgroundColor = 'white'; start.style.border = '4px solid black'; start.style.textAlign = 'center'; start.style.cursor = 'pointer'; start.id = 'start'; start.style.display = 'block'; start.innerText = 'start'; document.getElementById('start').addEventListener('click', function() { scorer.style.top = '260px'; start.style.left='-99999999999999999999999999999px'; me.style.top='220px'; counted=0; maxcount=1; function show(){ if (counted<maxcount){ num=Math.floor(Math.random()*(4-1+1)+1); list.push(num); if (list[counted]==1){ green.style.opacity = 1; setTimeout(function() { green.style.opacity = 0.6; }, 500); } if (list[counted]==2){ red.style.opacity = 1; setTimeout(function() { red.style.opacity = 0.6; }, 500); } if (list[counted]==3){ yellow.style.opacity = 1; setTimeout(function() { yellow.style.opacity = 0.6; }, 500); } if (list[counted]==4){ blue.style.opacity = 1; setTimeout(function() { blue.style.opacity = 0.6; }, 500); } counted=counted+1; } } setInterval(show,1000); }); }()); function checkifallclicked(){ if (counted>=maxcount){ if (clicked>=maxcount){ score=score+1; clicked=0; maxcount=maxcount+1; counted=0; } } } function update(){ scorer.innerText = 'score: '+score+''; } setInterval(checkifallclicked,15); setInterval(update,15);
        },
      },
      {
        type: "button",
        text: "Asteroids",
        onclick: () => {
          var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);
        },
      },
      {
        type: "button",
        text: "Piano",
        onclick: () => {
          (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/piano.js"})();
        },
      },
      {
        type: "button",
        text: "Maze Explorer",
        onclick: () => {
          var s=document.createElement('script');s.type='text/javascript';s.src='https://sheeptester.github.io/thingkingland/bookmarklets/boredom.js';document.head.appendChild(s);
        },
      },
      {
        type: "button",
        text: "Tic Tac Toe",
        onclick: () => {
          (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/tic.js"})();
        },
      },
      {
        type: "button",
        text: "Katarmi",
        onclick: () => {
          var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
        },
      },
      {
        type: "button",
        text: "Tomato Smash",
        onclick: () => {
          (_=>{import('https://quinten.github.io/tomato-smash/index.js').then(_=>{new TomatoSmash.Game()})})();
        },
      }
    ]
  },
  {
    type: "folder",
    text: "Annoying",
    subfolder: [
      {
        type: "button",
        text: "Rotate Page",
        onclick: () => {
          (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}());
        },
      },
      {
        type: "button",
        text: "Un-rotate Page",
        onclick: () => {
          (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(0deg)';});}());
        },
      },
      {
        type: "button",
        text: "Askew",
        onclick: () => {
          (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}());
        },
      },
      {
        type: "button",
        text: "Ridiculous",
        onclick: () => {
          (function(){document.documentElement.style.transitionDuration="120s";document.documentElement.style.transitionTimingFunction="ease-in";document.documentElement.style.transform="rotate(99999deg)";}());(function(){var x = document.getElementsByTagName("*"); for (i = 0; i < x.length; i++) {x[i].style.cursor = "none"};}());(function() { window.__glitch_runs = window.__glitch_runs ? window.__glitch_runs + 1 : 1; const MODES = { STANDARD: 'STANDARD', TURBO: 'TURBO' }; const OPTIONS = Object.assign( { G_T: false, G_I: true, TURBO: false }, {G_T:true} || {} ); const GLITCH_TEXT = OPTIONS.G_T; const GLITCH_IMAGES = OPTIONS.G_I; const MODE = OPTIONS.TURBO ? MODES.TURBO : MODES.STANDARD; if (MODE === MODES.TURBO) { window.__glitch_runs = 3; } const transformTranspose = (header, input, gap = 1) => { const idx = header + Math.floor(Math.random() * (input.length - header - gap)); const tmp = input[idx]; input[idx] = input[idx + gap]; input[idx + gap] = tmp; return input; }; const transformSubstitute = (header, input) => { const by = Math.floor(Math.random() * 256); const idx = header + Math.floor(Math.random() * (input.length - header)); input[idx] = by; return input; }; const transformText = str => { let bytes = new TextEncoder('utf-8').encode(str); const errors = Math.random() * (0.05 * str.length); for (let i = 0; i < errors; i += 1) { bytes = Math.random() > 0.5 ? transformSubstitute(0, bytes) : transformTranspose( 0, bytes, Math.floor(Math.random() * str.length - 1) + 1 ); } const string = new TextDecoder('utf-8').decode(bytes); return string.replace(/\uFFFD/g, ''); }; const glitchImage = image => { try { image.onload = () => {}; image.style.backgroundColor = '#262626'; const canvas = document.createElement('canvas'); const context = canvas.getContext('2d'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight; context.drawImage(image, 0, 0); canvas.toBlob(blob => { const fileReader = new FileReader(); fileReader.onload = event => { const data = blob.size === event.target.result.byteLength ? new Uint8Array(event.target.result) : null; image.onerror = () => { image.src = URL.createObjectURL(blob); }; const glitchOnce = () => { const errors = Math.random() * 10 * window.__glitch_runs; let corrupted = data.slice(0); for (let i = 0; i < errors; i++) { corrupted = Math.random() > 0.5 ? transformTranspose(100, corrupted) : transformSubstitute(100, corrupted); } const corruptBlob = new Blob([corrupted], { type: 'image/png' }); const corruptSrc = URL.createObjectURL(corruptBlob); image.src = corruptSrc; }; const glitchImageRaf = () => { glitchOnce(); window.requestAnimationFrame(glitchImageRaf); }; const glitchImageTimeout = (max = 300) => { glitchOnce(); window.setTimeout(() => { glitchImageTimeout(max); }, Math.random() * max / 2 + Math.random() * max / 2); }; if (MODE === MODES.STANDARD) { glitchImageTimeout(); } else if (MODE === MODES.TURBO) { glitchImageRaf(); } }; fileReader.readAsArrayBuffer(blob); }, 'image/jpeg'); } catch (e) { return false; } }; const glitchText = n => { const original = n.textContent; const glitchText = () => { n.textContent = transformText(original).replace(/\uFFFD/g, ''); }; const glitchTextTimeout = (max = 1000) => { glitchText(); window.setTimeout(() => { glitchTextTimeout(max); }, Math.random() * max / 2 + Math.random() * max / 2); }; glitchTextTimeout(); }; const textNodesUnder = el => { let n; const a = []; const walk = document.createTreeWalker( el, NodeFilter.SHOW_TEXT, null, false ); while ((n = walk.nextNode())) { a.push(n); } return a; }; const setupGlitch = () => { if (GLITCH_IMAGES) { const images = document.querySelectorAll('img'); images.forEach(i => { i.complete ? glitchImage(i) : (i.onload = event => glitchImage(event.target)); }); } if (GLITCH_TEXT) { const textNodes = textNodesUnder(document.body).filter( n => n.textContent && n.textContent.length > 0 && n.textContent.trim() ); textNodes.forEach(glitchText); } }; if (document.readyState === 'complete') { setupGlitch(); } else { document.body.addEventListener('load', setupGlitch); } })();(function(){var x = document.getElementsByTagName("*"); for (i = 0; i < x.length; i++) {x[i].style.cursor = "none";}}());
        },
      },
      {
        type: "button",
        text: "Flip Images",
        onclick: () => {
          (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.style[prefix + 'transform'] = 'rotate(180deg)';});});}());
        },
      },
      {
        type: "button",
        text: "Matrix",
        onclick: () => {
          (()=>{const b = document.createElement('div');document.body.appendChild(b);function rx() {return Math.random()*window.innerWidth;}function ry() {return Math.random()*window.innerHeight;}function r(){const a=document.createElement('span');a.className='2kJCole-is-cool';a.style.position='fixed';a.style.color='#00ff00';a.style.background='#000';a.style.padding='0.25rem';a.style.borderRadius='1rem';a.style.top=ry()+'px';a.style.right=rx()+'px';a.textContent=(Math.random()+1).toString(36).substring(2,3);return a;}setInterval(()=>b.appendChild(r()), 1);})();
        },
      },
      {
        type: "button",
        text: "Trap",
        onclick: () => {
          (function(){setTimeout(function(){document.onmousemove = document.onkeypress = function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transition'] = prefix + 'transform 3s';document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}}, 5000);}());
        },
      },
      {
        type: "button",
        text: "Infinite Tabs",
        onclick: () => {
           alert("Use at your own risk."); while (true){window.open("chrome://newtab")};
        },
      },
      {
        type: "button",
        text: "Chromebook Crasher",
        onclick: () => {
          onbeforeunload = function(){localStorage.x=1};setTimeout(function(){  while(1)location.reload(1)}, 1000)
        },
      },
      {
        type: "button",
        text: "Glitch",
        onclick: () => {
          (function(){function c(){return'#'+Math.floor(16777215*Math.random()).toString(16)}function r(e){return Math.floor(Math.random()*e)+1}function l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}var d=document;d.head.innerHTML='SUBstyleSUB*{margin:0; overflow:hidden; padding:0; overflow:hidden;} div{ transform-origin: 50% 50%; width:100%; height:1px; position:relative; z-index:1;} SUB/SUBstyleSUB',d.body.innerHTML='';var w=window.screen.availHeight;for(d.body.addEventListener('click',function(){l(d.documentElement)}),i=0;w>i;i++){var z=d.createElement('div');z.id='b'+i,z.style.backgroundColor=c(),d.body.appendChild(z)}setInterval(function(){for(var e=0;10>e;e++)d.getElementById('b'+r(w)).style.backgroundColor=c(),d.getElementById('b'+r(w)).style.height=r(4)+'px',d.body.style.backgroundColor=c(),d.body.style.transform=r(256)>128?'scale(3) rotate('+r(35)+'deg)':'rotate(0deg) scale(1)';window.scrollTo(0,document.body.scrollHeight)},10),setInterval(function(){window.scrollTo(0,0)},50);})()
        },
      },
      {
        type: "button",
        text: "Keep Printing Page",
        onclick: () => {
          window.addEventListener("keydown", function(key){window.print();});window.addEventListener("click", function(click){window.print();});
        },
      },
      {
        type: "button",
        text: "Hide Cursor",
        onclick: () => {
          function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.cursor="none";}}a(document);
        },
      },
      {
        type: "button",
        text: "No Click",
        onclick: () => {
           !function(){var e,t,n,a,o;for(document.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault()},!0),e=document.getElementsByTagName("input"),t=document.getElementsByTagName("textarea"),n=document.getElementsByTagName("button"),a=e.concat(t).concat(n),o=0;o<a.length;o++)a[o].disabled=!0}();
        },
      },
      {
        type: "button",
        text: "Big Cursor",
        onclick: () => {
          !function(){var A=document.createElement("style"),e=document.createTextNode("* { cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNrs2dEKgDAIhWEN3/+VLYtBF12MppHwDxY0uvg4DJpORcSl0bB4uPcwq+oFHu8/956pbtJsAAYMGDBgwIABA044t3pMEgb8VU2XsWdn1o/aUUn4bchPBWNFYWvVidxbCFGmr7YULBs1YDPfsYcXEi9ryvDjAAwYMGDAgAED7nK8bHG7qNLs6nYXYAAheh5j8Qw5fwAAAABJRU5ErkJggg==) 22 22, auto !important; }");A.appendChild(e),document.getElementsByTagName("head")[0].appendChild(A)}();
        },
      },
      {
        type: "button",
        text: "Blur Screen",
        onclick: () => {
           (function () { document.body.style.filter = 'blur(5px)'; })();
        },
      },
      {
        type: "button",
        text: "Snow",
        onclick: () => {
           (t => {function i() {this.D = function() {const t = h.atan(this.i / this.d);l.save(), l.translate(this.b, this.a), l.rotate(-t), l.scale(this.e, this.e * h.max(1, h.pow(this.j, .7) / 15)), l.drawImage(m, -v / 2, -v / 2), l.restore()}}window;const h = Math,r = h.random,a = document,o = Date.now;e = (t => {l.clearRect(0, 0, _, f), l.fill(), requestAnimationFrame(e);const i = .001 * y.et;y.r();const s = L.et * g;for (var n = 0; n < C.length; ++n) {const t = C[n];t.i = h.sin(s + t.g) * t.h, t.j = h.sqrt(t.i * t.i + t.f), t.a += t.d * i, t.b += t.i * i, t.a > w && (t.a = -u), t.b > b && (t.b = -u), t.b < -u && (t.b = b), t.D()}}), s = (t => {for (var e = 0; e < p; ++e) C[e].a = r() * (f + u), C[e].b = r() * _}), n = (t => {c.width = _ = innerWidth, c.height = f = innerHeight, w = f + u, b = _ + u, s()});class d {constructor(t, e = !0) {this._ts = o(), this._p = !0, this._pa = o(), this.d = t, e && this.s()}get et() {return this.ip ? this._pa - this._ts : o() - this._ts}get rt() {return h.max(0, this.d - this.et)}get ip() {return this._p}get ic() {return this.et >= this.d}s() {return this._ts = o() - this.et, this._p = !1, this}r() {return this._pa = this._ts = o(), this}p() {return this._p = !0, this._pa = o(), this}st() {return this._p = !0, this}}const c = a.createElement("canvas");H = c.style, H.position = "fixed", H.left = 0, H.top = 0, H.width = "100vw", H.height = "100vh", H.zIndex = "100000", H.pointerEvents = "none", a.body.insertBefore(c, a.body.children[0]);const l = c.getContext("2d"),p = 300,g = 5e-4,u = 20;let _ = c.width = innerWidth,f = c.height = innerHeight,w = f + u,b = _ + u;const v = 15.2,m = a.createElement("canvas"),E = m.getContext("2d"),x = E.createRadialGradient(7.6, 7.6, 0, 7.6, 7.6, 7.6);x.addColorStop(0, "hsla(255,255%,255%,1)"), x.addColorStop(1, "hsla(255,255%,255%,0)"), E.fillStyle = x, E.fillRect(0, 0, v, v);let y = new d(0, !0),C = [],L = new d(0, !0);for (var j = 0; j < p; ++j) {const t = new i;t.a = r() * (f + u), t.b = r() * _, t.c = 1 * (3 * r() + .8), t.d = .1 * h.pow(t.c, 2.5) * 50 * (2 * r() + 1), t.d = t.d < 65 ? 65 : t.d, t.e = t.c / 7.6, t.f = t.d * t.d, t.g = r() * h.PI / 1.3, t.h = 15 * t.c, t.i = 0, t.j = 0, C.push(t)}s(), EL = a.addEventListener, EL("visibilitychange", () => setTimeout(n, 100), !1), EL("resize", n, !1), e()})();
        },
      },
      {
        type: "button",
        text: "Fake Hacked Screen",
        onclick: () => {
          !function(){const e=document.createElement("div");e.style.position="fixed",e.style.top="5%",e.style.left="50%",e.style.transform="translate(-50%, 0%)",e.style.fontSize="5rem",e.style.backgroundColor="#3a3aff",e.style.color="#ee0000",e.style.border="10px solid #ee0000",e.style.zIndex="9999",e.style.lineHeight="normal",e.style.cursor="not-allowed",e.style.userSelect="none",e.textContent="YOU ARE BEING HACKED :)",document.body.appendChild(e);const t=["overline","line-through","blink","underline"];let l=0;setInterval(()=>{e.style.textDecorationLine=t[l];const o=e.style.backgroundColor;e.style.backgroundColor=e.style.color,e.style.color=o,e.style.borderColor=o,l<t.length-1?l++:l=0},100)}();
        },
      },
      {
        type: "button",
        text: "15,000 HZ",
        onclick: () => {
          alert("High Pitched Noise Player! Press H To Hide Player!");var s = "https://www.youtube.com/embed/MMNa8yqUEbE";((function(){var a,b,c;c=s,b=document.createElement("iframe"),b.setAttribute("src",c),b.setAttribute("id","rusic-modal"),b.setAttribute("style","position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #fff;"),a=document.getElementsByTagName("body")[0],a.appendChild(b); window.addEventListener('keydown', function(event) { if (event.key == 'h') { b.setAttribute("style","left:-100000px;"); } }); })).call(this);
        },
      }
    ]
  }
];

  ejrContainerLoadedFunction = () => {
    const title = document.getElementById("ejrTitle")
    const $ = document.getElementById("ejrButtonsContainer")
    
    const recurse = (path, titlePath, depth) => {
      title.innerText = titlePath[depth]
      document.querySelectorAll("#ejrButtonsContainer button").forEach(button => button.remove())
      
      for (const btn of path[depth]) {
        const button = document.createElement("button")
        button.textContent = btn.text
        if (btn.type === "button") {
          button.className = "ejrButton"
          button.onclick = btn.onclick
        }
        else if (btn.type === "folder") {
          button.className = "ejrFolder"
          button.onclick = () => {
            titlePath.push(btn.text)
            path.push(btn.subfolder)
            recurse(path, titlePath, depth+1)
          }
        }
        $.appendChild(button)
      }
      if (depth > 0) {
        const button = document.createElement("button")
        button.className = "ejrBack"
        button.textContent = "Back"
        button.onclick = () => {
          titlePath.pop()
          path.pop()
          recurse(path, titlePath, depth-1)
        }
        $.appendChild(button)
      }
    }
    recurse([buttons], [title.innerText], 0)
  }

  ejrKeypressListererFunction = (event) => {
    if (event.key === "\\") {
      const $ = document.getElementById("ejrClientContainer").style
      if ($.visibility === "hidden") {
        $.visibility = "visible"
      } else {
        $.visibility = "hidden"
      }
    }
    
    if (event.key === "`") {
      const $ = document.getElementById("ejrClientContainer")
      $.remove()
      const style = document.getElementById("ejrClientStyle")
      style.remove()
      
      ejrClientContainer.removeEventListener("containerLoaded", ejrContainerLoadedFunction)
      document.removeEventListener('keydown', ejrKeypressListererFunction)
      window.removeEventListener("resize", setButtonsContainerMaxHeight)
    }
  }
  
  ejrClientContainer.addEventListener("ejrClientLoaded", ejrContainerLoadedFunction)
  document.addEventListener('keydown', ejrKeypressListererFunction)
  
  ejrClientContainer.dispatchEvent(new Event("ejrClientLoaded"))
})()
