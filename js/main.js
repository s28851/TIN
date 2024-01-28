
function changeText(option) {
  var displayText = document.getElementById('displayText');

  switch (option) {
    case 'naszeOsiagniecia':
      displayText.innerHTML = "Nasza firma w 2023r osiągnęła wskaźnik najwyższej klikalności reklam. Dzięki osobistemu zaangażowaniu naszego prezesa i pracowników wspieraliśmy konkurs artystyczny młodych talentów gminy Włoszczowa.";
      break;
    case 'zdobyteNagrody':
      displayText.innerHTML = "Zdobyte nagrody:<br>2023 laur klienta,<br>2022 nagroda Ministra Spraw śmiesznych,<br>2021 Honorowy Pasożyt Roku,<br>2020 Najbardziej znienawidzony pracodawca roku,<br>2019 Papierowy gigant.";
      break;
    case 'naszZespol':
      displayText.innerHTML = "Lista pracowników:<br>Jan Nowak, Zygmunt Kowalski, Zenobiusz Pietruszka, Alesander Fredro, Mariusz Kamiński, Maciej Wąsik";
      break;
    default:
      displayText.innerHTML = "Wybierz opcję z lewej strony.";
  }
};
    