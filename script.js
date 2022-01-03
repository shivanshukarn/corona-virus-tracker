console.log("Corona Virus Status in India")
const india = document.getElementById('india')
const tbody = document.getElementById('tbody')
const footer = document.getElementById('footer')

function fetchData() {
    fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)

            var ddd = new Date(data.lastUpdatedAtApify);
                // console.log(ddd.toLocaleString('en-US', { hour12: true }))

            india.innerHTML = `
                <h5 class="text-primary">Active Cases : ${data.activeCases}</h5>
                <h5 class="text-danger">Active Cases New : ${data.activeCasesNew}</h5>
                <h5 class="text-success">Recovered : ${data.recovered}</h5>
                <h5 class="text-success">Recovered New : ${data.recoveredNew}</h5>
                <h5 class="text-danger">Deaths : ${data.deaths}</h5>
                <h5 class="text-danger">Deaths New : ${data.deathsNew}</h5>
                <h5 class="text-info">Previous Day Tests : ${data.previousDayTests}</h5>
                <h5 class="text-warning">Total Cases : ${data.totalCases}</h5>
                <h6>Last Updated : <span class="text-uppercase">${ddd.toLocaleString('en-IN', { hour12: true })}</span></h6>
                `

            for (element of data.regionData) {
                // console.log(element)
                tbody.innerHTML += `
                <tr>
                    <td class="text-dark">${element.region}</td>
                    <td class="text-primary">${element.activeCases}</td>
                    <td class="text-danger">${element.newInfected}</td>
                    <td class="text-success">${element.recovered}</td>
                    <td class="text-success">${element.newRecovered}</td>
                    <td class="text-danger">${element.deceased}</td>
                    <td class="text-danger">${element.newDeceased}</td>
                    <td class="text-warning">${element.totalInfected}</td>
                </tr>
                `
            }
            footer.innerHTML = `
                <h6>Data Source : <a href='${data.sourceUrl}'>${data.sourceUrl}</a></h6>
                <h6>Created By : <a href='https://shivanshu-tech18.github.io/' target="_blank">Shivanshu Karn</a></h6>
                `
        })
}

fetchData();