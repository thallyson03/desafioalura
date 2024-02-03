const encriptar = () => {
    const texto = document.getElementById('texto');
    const mensagem = texto.value;
    const resultado = document.getElementById('resultado');
    const tela = document.getElementById('imagens');
    const msg = document.querySelector('.mensagem');
  
    const criptografia = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
  
    const caracteres = mensagem.split('');
  
    const mensagemCriptografada = caracteres
      .map((caractere) => {
        return criptografia[caractere.toLowerCase()] || caractere;
      })
      .join('');
  
    texto.value = '';
  
    if (mensagem != '') {
  
      tela.style.display = 'none';
      msg.style.display = 'none';
  
  
      return (resultado.innerText = mensagemCriptografada);
  
    }else{
      resultado.innerText = ''
      tela.style.display = 'flex';
      msg.style.display = 'flex';
    }
  };
  
  const descriptar = () => {
    const texto = document.querySelector('#texto');
    let mensagem = texto.value;
    const resultado = document.getElementById('resultado');
    const tela = document.getElementById('imagens');
    const msg = document.querySelector('.mensagem');
  
    let criptografia = [
      ['a', 'ai'],
      ['e', 'enter'],
      ['i', 'imes'],
      ['o', 'ober'],
      ['u', 'ufat'],
    ];
  
    for (i = 0; i < criptografia.length; i++) {
      if (mensagem.includes(criptografia[i][1])) {
        mensagem = mensagem.replaceAll(criptografia[i][1], criptografia[i][0]);
      }
    }
  
    texto.value = '';
  
    if (mensagem != '') {
  
      tela.style.display = 'none';
      msg.style.display = 'none';
  
      return (resultado.innerText = mensagem);
    }else{
      tela.style.display = 'flex';
      msg.style.display = 'flex';
  
    }
  };
  
  const copiarMensagem = async () => {
    const texto = document.getElementById('resultado');
    const mensagem = texto.innerText;
  
    try {
      await navigator.clipboard.writeText(mensagem);
    } catch {
      console.error(err);
    }
  };