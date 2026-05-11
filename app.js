function searchService(){

    const keyword =
        document.getElementById('searchInput')
        .value
        .toLowerCase();

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const title =
            card.querySelector('h3')
            .innerText
            .toLowerCase();

        if(title.includes(keyword)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}
function showTab(tabId){

    const tabs =
        document.querySelectorAll('.search-content');

    tabs.forEach(tab => {
        tab.classList.remove('active-content');
    });

    document
        .getElementById(tabId)
        .classList.add('active-content');

    const buttons =
        document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
}