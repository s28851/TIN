$(document).ready(function () {
    $('#datepicker').datepicker({
        format: "yyyy-mmm-dd",
        todayBtn: "linked",
        todayHighlight: true,
        todayBtn: true,
        daysOfWeekDisabled: "0,6",
        daysOfWeekHighlighted: '0,6',
        clearbtn: true,
        startDate: "-0d",
        showOn:"",
    })//.datepicker('update', newDate()).datepicker("show");

    $('#datepicker').datepicker().on('changeDate', function (e) {
        console.log(e.date);
        generateAvailableHours();
        
    });
    function generateAvailableHours() {
        // Usunięcie istniejących zakresów godzinowych
        $('.available-hours').empty();

        // Pobranie daty z inputa
        var selectedDate = e.date;
        // $('#datepicker').datepicker('getDate');

        console.log('Czy', selectedDateDate, 'jest dniem roboczym?', isWeekday(selectedDate));

        // Sprawdzenie czy to dzień roboczy
        if (isWeekday(selectedDate)) {
            // Dodanie zakresów godzinowych
            for (var hour = 9; hour <= 14; hour++) {
                var startTime = hour + ":00";
                var endTime = (hour + 1) + ":00";

                // Stworzenie elementu div z zakresem godzinowym
                var hourRangeDiv = $('<div>').text(startTime + " - " + endTime);

                // Dodanie diva do diva o klasie "available-hours"
                $('.available-hours').append(hourRangeDiv);
            }
        } else {
            // Dzień wolny od pracy
            $('.available-hours').HTML("Dzień wolny od pracy");
        }

    }

    function logoType() {
        this.f = "financial";
        this.l = "legal";
        this.c = "consulting";
        this.i = "integration";
    }

    function HoursRange() {
        this.nine = "09:00 - 10:00";
        this.ten = "10:00 - 11:00";
        this.eleven = "11:00 - 12:00";
        this.twelve = "12:00 - 13:00";
        this.thirteen = "13:00 - 14:00";
    }

    function TypSpotkania() {
        this.f = "financial-advisory";
        this.l = "legal-advisory";
        this.c = "consulting";
        this.i = "integration";
    }

    // Funkcja sprawdzająca czy to dzień roboczy
    function isWeekday(date) {
        var day = date.getDay();
        return day >= 1 && day <= 5; // Poniedziałek - Piątek
    }

    // var toggleCheckBox = document.querySelectorAll

    // var financialDivs = document.querySelectorAll(logoType.f);
    // var legalDivs = document.querySelectorAll(logoType.l);
    // var consultingDivs = document.querySelectorAll(logoType.c);
    // var integrationDivs = document.querySelectorAll(logoType.i);

    

    

});