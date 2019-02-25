export class PatternBuilder {
    public build(pattern: string) {
        switch (pattern) {
            case 'Blinker':
                document.getElementById('3,5').className = 'clicked';
                document.getElementById('4,5').className = 'clicked';
                document.getElementById('5,5').className = 'clicked';
                break;
            case 'Toad':
                document.getElementById('3,4').className = 'clicked';
                document.getElementById('3,5').className = 'clicked';
                document.getElementById('3,6').className = 'clicked';
                document.getElementById('4,3').className = 'clicked';
                document.getElementById('4,4').className = 'clicked';
                document.getElementById('4,5').className = 'clicked';
                break;
            case 'Glider':
                document.getElementById('0,2').className = 'clicked';
                document.getElementById('1,3').className = 'clicked';
                document.getElementById('2,1').className = 'clicked';
                document.getElementById('2,2').className = 'clicked';
                document.getElementById('2,3').className = 'clicked';
                break;
            case 'Beacon':
                document.getElementById('2,2').className = 'clicked';
                document.getElementById('3,2').className = 'clicked';
                document.getElementById('2,3').className = 'clicked';
                document.getElementById('3,3').className = 'clicked';
                document.getElementById('4,4').className = 'clicked';
                document.getElementById('4,5').className = 'clicked';
                document.getElementById('5,4').className = 'clicked';
                document.getElementById('5,5').className = 'clicked';
                break;
            case 'Pentadecathlon':
                document.getElementById('7,7').className = 'clicked';
                document.getElementById('7,8').className = 'clicked';
                document.getElementById('7,9').className = 'clicked';
                document.getElementById('5,8').className = 'clicked';
                document.getElementById('6,8').className = 'clicked';
                document.getElementById('4,7').className = 'clicked';
                document.getElementById('4,8').className = 'clicked';
                document.getElementById('4,9').className = 'clicked';

                document.getElementById('9,7').className = 'clicked';
                document.getElementById('9,8').className = 'clicked';
                document.getElementById('9,9').className = 'clicked';
                document.getElementById('10,7').className = 'clicked';
                document.getElementById('10,8').className = 'clicked';
                document.getElementById('10,9').className = 'clicked';

                document.getElementById('15,7').className = 'clicked';
                document.getElementById('15,8').className = 'clicked';
                document.getElementById('15,9').className = 'clicked';
                document.getElementById('13,8').className = 'clicked';
                document.getElementById('14,8').className = 'clicked';
                document.getElementById('12,7').className = 'clicked';
                document.getElementById('12,8').className = 'clicked';
                document.getElementById('12,9').className = 'clicked';
                break;

            default:
                break;
        }
    }
}
