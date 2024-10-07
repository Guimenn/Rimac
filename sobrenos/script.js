// Número de rastros visíveis
const trailLimit = 20;
let trails = [];

document.addEventListener('mousemove', function(e) {
    // Criar um elemento de rastro
    const trail = document.createElement('div');
    trail.classList.add('trail');
    
    // Definir a posição do rastro
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    // Adicionar o rastro ao corpo
    document.body.appendChild(trail);
    trails.push(trail);
    
    // Remover rastros antigos quando o limite for atingido
    if (trails.length > trailLimit) {
        let oldTrail = trails.shift();
        oldTrail.remove();
    }
    
    // Remover o rastro após a animação
    setTimeout(() => {
        trail.remove();
    }, 500); // O tempo deve ser igual ao da animação
});