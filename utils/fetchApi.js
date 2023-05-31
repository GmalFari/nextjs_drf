import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'
const apiToken = '7887921aa2msh94876cf79f1bebep128dadjsn95ba54310376'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
    //     headers: {
    // 'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    // 'X-RapidAPI-Key':apiToken
    //     }
    //     ,
    });
    return data; 
}

export const fetchApi2 = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${apiToken}`
          },
    });
    return data; 
}


export const   createApi = async (url) => {
    const {data} = await axios.post((url), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${apiToken}`
          },
    });
    return data; 
}

// {'5416', '9170', '8288', '5003', '8122', '10387',
//  '5549', '8617', '9669', '11436', '9137', '11416', 
//  '11840', '5001', '8277', '11994', '6796', '9026', '8656',
//   '9666', '5093', '5136', '8833', '8476', '9397', '5002', '8505',
//    '5037', '5024', '5900', '8440', '6901', '5460', '5103', '7153',
//     '14098', '16489', '5152', '6996', '8137', '5569', '11340', '5575',
//      '9475', '6691', '5080', '8520', '14399', '8788', '9229', '11435',
//      '15081', '8436', '12092', '11454'}




// {'FIVE Palm Jumeirah', 'Plazzo Heights', 'Business Bay', 
// 'The Address The Blvd', 'Icon Tower 2', 'Marina Promenade', 'Burj Views', 
// 'Delphine', 'Park Heights 1', 'Carson Tower C', 'Carson - The Drive', 'Dubai Creek Harbour', 
// 'JVC District 10', 'Dubai Production City (IMPZ)', 'Stella Maris', 'JVC District 14', 'Bur Dubai', 
// 'Jumeirah Village Circle (JVC)', 'Sadaf 2', 'Bahar 1', 'DAMAC Hills', 'Signature Livings', 'Burj Views C',
//  'Al Kifaf', 'Downtown Dubai', 'Dubai Creek Residence Tower 1 South', 'Downtown Views', 'Park Island', 
//  'The Crescent Tower A', 'JLT Cluster L', 'Fairfield Tower', 'Cayan Tower', 'Dubai', 'Dubai Hills Estate',
//   'Executive Towers', 'Dubai Marina', 'Park View Tower', 'Motor City', 
//   'Shakespeare Circus 2', 'The Crescent Towers', 'Jumeirah Beach Residence (JBR)',
//    'UAE', 'Bahar', 'Palm Jumeirah', 'Uptown Motor City', 'JVC District 11', 'Pulse Smart Residence', 
//    'Park Heights', 'Dubai Creek Residences', 'Executive Tower F', 'Sadaf', 'Park Gate Residence',
//     'Elite Downtown Residence', 'Shakespeare Circus', 'Jumeirah Lake Towers (JLT)'}
