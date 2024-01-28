
function changeText(option) {
  var displayText = document.getElementById('displayText');

  switch (option) {
    case 'naszeOsiagniecia':
      displayText.innerHTML = "Nasza firma w 2023r osiągnęła wskaźnik najwyższej klikalności reklam. <br><br>Dzięki osobistemu zaangażowaniu naszego prezesa i pracowników wspieraliśmy konkurs artystyczny młodych talentów gminy Włoszczowa.<br><br>Ustanowiliśmy rekord Guinessa w najdłuższej jeździe bez trzymania kierownicy Fiatem 126P.";
      break;
    case 'zdobyteNagrody':
      displayText.innerHTML = "Zdobyte nagrody:<br><br>2023 laur klienta,<br>2022 nagroda Ministra Spraw śmiesznych,<br>2021 Honorowy Pasożyt Roku,<br>2020 Najbardziej znienawidzony pracodawca roku,<br>2019 Papierowy gigant.";
      break;
    case 'naszZespol':
      displayText.innerHTML = "Lista pracowników:<br><ol><li>Jan Nowak</li><li>Zygmunt Kowalski</li><li>Zenobiusz Pietruszka</li><li>Alesander Fredro</li><li>Mariusz Kamiński</li><li>Maciej Wąsik</li></ol>";
      break;
    default:
      displayText.innerHTML = "Wybierz opcję z lewej strony.";
  }
};
    