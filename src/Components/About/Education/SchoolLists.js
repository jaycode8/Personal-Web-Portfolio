import rima from './imgs/school.png'
import kidato from './imgs/mwaani.jpeg'
import chuo from './imgs/puea.jpeg'

const Schools = [
    {
        id: 1,
        img: rima,
        alt : 'Kivandini',
        name:'Kivandini Primary School',
        program:'Kenya Certificate of Primary Education',
        time:'2008 - 2015',
        linkto: 'https://www.kenyaprimaryschools.com/makueni/kivandini-primary-school-wote/#'
    },
    {
        id: 2,
        img: kidato,
        alt: 'Mwaani B',
        name:'Mwaani Boys High School',
        program:'Kenya Certificate of Secondary Education',
        time:'2016 - 2019',
        linkto:' https://educationnewshub.co.ke/mwaani-boys-secondary-school-full-details-kcse-results-analysis-contacts-location-admissions-history-fees-portal-login-website-knec-code/'
    },
    {
        id: 3,
        img: chuo,
        alt: 'PUEA',
        name:'The Pressbyterian University of East Africa',
        program:'Bachelors Degree in Computer Science',
        time:'2020 - up-to date',
        linkto: 'https://puea.ac.ke/'
    }
]
export default Schools