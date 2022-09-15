export function renderChampion(champion) {
        const li = document.createElement('li');
        li.classList.add('champion');
    
        
        const headerEl = document.createElement('h2');
         headerEl.textContent = champion.name;

        const pEl = document.createElement('p');
        pEl.textContent = champion.type + 'of' + champion.area;
        
        li.append(headerEl, pEl);

        return li;

}
