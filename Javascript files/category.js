
  
  const urlParams = new URLSearchParams(window.location.search);
  const char = urlParams.get('char');
  document.getElementById('char-name').textContent = char;

  
  const products = {
    Naruto: {
      hoodie: { img: '../Images/narutohoodies.png', text: 'Naruto Hoodie - $40' },
      keychain: { img: '../Images/narutochain.png', text: 'Naruto Key Chain - $10' }
    },
    OnePiece: {
      hoodie: { img: '../Images/Onepiececlothing.png', text: 'Luffy Hoodie - $45' },
      keychain: { img: '../Images/onechain.png', text: 'Luffy Key Chain - $12' }
    },
    AOT: {
      hoodie: { img: '../Images/aothoodies.png', text: 'Attack on Titan Hoodie - $50' },
      keychain: { img: '../Images/levichain.png', text: 'AOT Key Chain - $15' }
    },
    JJK: {
      hoodie: { img: '../Images/jjkhoodies.png', text: 'Jujutsu Kaisen Hoodie - $48' },
      keychain: { img: '../Images/jjkchain.png', text: 'JJK Key Chain - $13' }
    }
  };

  
  if (products[char]) {
    document.getElementById('hoodie-img').src = products[char].hoodie.img;
    document.getElementById('hoodie-text').textContent = products[char].hoodie.text;
    document.getElementById('keychain-img').src = products[char].keychain.img;
    document.getElementById('keychain-text').textContent = products[char].keychain.text;
  }

  
  function toggleItems(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
    console.log(`Toggled ${id} items for ${char}`);
  }

