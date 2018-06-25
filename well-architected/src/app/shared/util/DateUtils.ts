export class DateUtils {
    public static dateLocaleSpanish(): any {
        return {
            firstDayOfWeek:  1,
            dayNames:        ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort:   ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin:     ["D", "L", "M", "X", "J",  "V", "S"],
            monthNames:      [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
                "Noviembre",
                "Diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
    }


    public static daysBetweenTwoDates(initDate: Date, endDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        let diffDays = Math.round(Math.abs((initDate.getTime() - endDate.getTime()) / (oneDay)));

        // El +2 es para incluir los propios días de las fechas (inclusive), que la formula anterior
        // no los tiene en cuenta
        return diffDays + 2;
    }

    public static addDaysToDate(myDate: Date, numberOfDays: number) {
        return new Date(myDate.getTime() + 1000 * 60 * 60 * 24 * numberOfDays);
    }


    public static timeSince(date: Date): string {

        let sinceString = "";
        let seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return sinceString + interval + " años";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return sinceString + interval + " meses";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return sinceString + interval + " dias";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return sinceString + interval + " horas";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return sinceString + interval + " min";
        }
        if (Math.floor(seconds) > 30) {
            return sinceString + Math.floor(seconds) + " segundos";

        }

        return sinceString + "unos segundos";
    }

}
