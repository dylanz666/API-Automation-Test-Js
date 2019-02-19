/**Created by Dylan*/
class DateUtil {

    static getCurrentTimeStamp() {
        return (new Date()).getTime();
    }

    static getYear(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('YYYY');
    }

    static getMonth(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        let month = parseInt(moment().add(adding, type).format('MM'));
        return month === 12 ? 1 : month;
    }

    static getDate(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('DD');
    }

    static getFormattedDate(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('MM-DD-YYYY');
    }

    static _getFormattedDate(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('MM/DD/YYYY');
    }

    static __getFormattedDate(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('YYYY/MM/DD');
    }

    static getUnformattedDate(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('MMDDYY');
    }

    static getFormattedTime(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('YYYY-MM-DD HH:mm:ss');
    }

    static getUnformattedDTime(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('YYYYMMDDHHmmss');
    }

    static _getFormattedTime(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('MM-DD-YYYY HH:mm:ss');
    }

    static _getUnformattedDTime(adding, type) {//adding can be any number, type can be 'year','month','day'
        adding = adding ? adding : 0;
        type = type ? type : 'days';
        return moment().add(adding, type).format('MMDDHYYYYHmmss');
    }
}

module.exports = DateUtil;