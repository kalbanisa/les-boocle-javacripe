function showLoopInfo() {
  const loopType = document.getElementById('loopType').value.toLowerCase();
  const loopInfo = document.getElementById('loopInfo');
  let info = '';

  switch(loopType) {
      case 'for':
          info = `
              <h2>Boucle for</h2>
              <p>La boucle <code>for</code> est utilisée pour répéter une action un nombre déterminé de fois.</p>
              <pre><code>for (let i = 0; i < 10; i++) {
            console.log(i);
            }</code></pre>
          `;
          break;
             case 'while':
            info = `
              <h2>Boucle while</h2>
              <p>La boucle <code>while</code> répète une action tant qu'une condition est vraie.</p>
              <pre><code>let i = 0;
             while (i < 10) {
              console.log(i);
             i++;
            }</code></pre>
          `;
          break;
          case 'do-while':
          info = `
              <h2>Boucle do-while</h2>
              <p>La boucle <code>do-while</code> exécute une action au moins une fois, puis répète tant qu'une condition est vraie.</p>
              <pre><code>let i = 0;
            do {
            console.log(i);
            i++;
          } while (i < 10);</code></pre>
          `;
          break;
          case 'for.in':
            info = `
              <h2>Boucle for...in</h2>
              <p>La boucle <code>for...in</code>  Elle est souvent utilisée pour parcourir les propriétés d’un objet.</p>
              <pre><code>let let str = '';

               for (let i = 0; i < 9; i++) {
                 str = str + i;
                    }

                   console.log(str);
                    do {
                   console.log(i);
                   i++;
                  } while (i < 10);</code></pre>`
                  ;
          break;
          case 'for.of ':
            info = `
              <h2>Boucle for...in</h2>
              <p>La boucle <code>for...of </code>Utilisée pour itérer sur les valeurs des objets itérables comme les tableaux, les chaînes de caractères, les ensembles, etc..</p>
              <pre><code>let let str = '';

               for (let i = 0; i < 9; i++) {
                 str = str + i;
                    }

                   console.log(str);
                    do {
                   console.log(i);
                   i++;
                  } while (i < 10);</code></pre>`
                  ;
          break;
      default:
          info = '<p>Type de boucle non reconnu. Veuillez entrer "for", "while" ,"do-while","for.in" ou "for.of ".</p>';
  }

  loopInfo.innerHTML = info;
}
