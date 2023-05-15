//j'ai fait un async pour sencroniser ou ajouter le liste facilement à mon server( ordinateur) avec lien...

async function getHoliday() {
    //j'ai utilise méthode try (et catch) pour faire le base de connection à la liste avec axios.get()/await
    try {
      const response = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH');
      const holidayList = response.data
      const holElement = document.getElementById('holidayList');

//j'ai utilisé le for/of pour faire boucle le tableau dans le méthode try pour essaie envoi le tableau que j'ai importer avec axios.get/await

      for (let holiday of holidayList) {
        const holEl = document.createElement('div')
        holEl.innerHTML =`
        <div class="card" style="width: 18rem;">
        <div class="card-body" id="beerList">
          <h5 class="card-title">${holiday.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${holiday.localName}</h6>
          <p class="card-text">${holiday.date}</p>
        </div>
      </div>`
      // j'ai ajouter classList pour ajouter un class dans le col que j'ai créer avant et avec eventListener quand j'ai clicker n'importer où il a montre avec alert le date de holiday(Fêtes)
      holEl.classList.add('col')
      holEl.addEventListener('click', function(){
        alert(holiday.date)
      })
      holElement.appendChild(holEl)
      }
//j'ai fini ici le méthode try avec dernier étape catch pour envoye une error si il y a une problème à la méthode que j'ai utilise (try) aux debutent de codage.
    } catch (e) {
      console.error(e);
    }
  }
  getHoliday();