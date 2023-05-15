async function getHoliday() {
    try {
      const response = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH');
      const holidayList = response.data
      const holElement = document.getElementById('holidayList');

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

      holEl.classList.add('col')
      holEl.addEventListener('click', function(){
        alert(holiday.date)
      })
      holElement.appendChild(holEl)
      }

    } catch (e) {
      console.error(e);
    }
  }
  getHoliday();