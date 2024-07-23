// Sample periodic table data
const elements = [
    { atomicNumber: 1, atomicSymbol: 'H', atomicName: 'Hydrogen', atomicWeight: 1.008 },
    { atomicNumber: 2, atomicSymbol: 'He', atomicName: 'Helium', atomicWeight: 4.00 },
    { atomicNumber: 3, atomicSymbol: 'Li', atomicName: 'Lithium', atomicWeight: 6.94 },
    { atomicNumber: 4, atomicSymbol: 'Be', atomicName: 'Beryllium', atomicWeight: 9.01 },
    { atomicNumber: 5, atomicSymbol: 'B', atomicName: 'Boron', atomicWeight: 10.81 },
    { atomicNumber: 6, atomicSymbol: 'C', atomicName: 'Carbon', atomicWeight: 12.01 },
    { atomicNumber: 7, atomicSymbol: 'N', atomicName: 'Nitrogen', atomicWeight: 14.00 },
    { atomicNumber: 8, atomicSymbol: 'O', atomicName: 'Oxygen', atomicWeight: 16.00 },
    { atomicNumber: 9, atomicSymbol: 'F', atomicName: 'Fluorine', atomicWeight: 20.00 },
    { atomicNumber: 10, atomicSymbol: 'Ne', atomicName: 'Neon', atomicWeight: 20.18 },
    { atomicNumber: 11, atomicSymbol: 'Na', atomicName: 'Sodium', atomicWeight: 23.00 },
    { atomicNumber: 12, atomicSymbol: 'Mg', atomicName: 'Magnesium', atomicWeight: 24.31 },
    { atomicNumber: 13, atomicSymbol: 'Al', atomicName: 'Aluminium', atomicWeight: 26.99 },
    { atomicNumber: 14, atomicSymbol: 'Si', atomicName: 'Silicon', atomicWeight: 28.08 },
    { atomicNumber: 15, atomicSymbol: 'P', atomicName: 'Phosphorus', atomicWeight: 30.97 },
    { atomicNumber: 16, atomicSymbol: 'S', atomicName: 'Sulphur', atomicWeight: 32.06 },
    { atomicNumber: 17, atomicSymbol: 'Cl', atomicName: 'Chlorine', atomicWeight: 35.45 },
    { atomicNumber: 18, atomicSymbol: 'Ar', atomicName: 'Argon', atomicWeight: 39.09 },
    { atomicNumber: 19, atomicSymbol: 'K', atomicName: 'Potassium', atomicWeight: 40.07 },
    { atomicNumber: 20, atomicSymbol: 'Ca', atomicName: 'Calcium', atomicWeight: 44.95 },
    { atomicNumber: 21, atomicSymbol: 'Sc', atomicName: 'Scandium', atomicWeight: 47.86 },
    { atomicNumber: 22, atomicSymbol: 'Ti', atomicName: 'Titanium', atomicWeight: 50.94 },
    { atomicNumber: 23, atomicSymbol: 'V', atomicName: 'Vanadium', atomicWeight: 51.99 },
    { atomicNumber: 24, atomicSymbol: 'Cr', atomicName: 'Chromium', atomicWeight: 54.93 },
    { atomicNumber: 25, atomicSymbol: 'Mn', atomicName: 'Manganese', atomicWeight: 55.84 },
    { atomicNumber: 26, atomicSymbol: 'Fe', atomicName: 'Iron', atomicWeight: 58.69 },
    { atomicNumber: 27, atomicSymbol: 'Co', atomicName: 'Cobalt', atomicWeight: 58.93 },
    { atomicNumber: 28, atomicSymbol: 'Ni', atomicName: 'Nickel', atomicWeight: 63.54 },
    { atomicNumber: 29, atomicSymbol: 'Cu', atomicName: 'Copper', atomicWeight: 65.39 },
    { atomicNumber: 30, atomicSymbol: 'Zn', atomicName: 'Zinc', atomicWeight: 69.7 },
    { atomicNumber: 31, atomicSymbol: 'Ga', atomicName: 'Gallium', atomicWeight: 72.64 },
    { atomicNumber: 32, atomicSymbol: 'Ge', atomicName: 'Germanium', atomicWeight: 74.92 },
    { atomicNumber: 33, atomicSymbol: 'As', atomicName: 'Arsenic', atomicWeight: 78.96 },
    { atomicNumber: 34, atomicSymbol: 'Se', atomicName: 'Selenium', atomicWeight: 78.96 },
    { atomicNumber: 35, atomicSymbol: 'Br', atomicName: 'Bromine', atomicWeight: 79.90 },
    { atomicNumber: 36, atomicSymbol: 'Kr', atomicName: 'Krypton', atomicWeight: 83.80 },
    { atomicNumber: 37, atomicSymbol: 'Rb', atomicName: 'Rubidium', atomicWeight: 85.46 },
    { atomicNumber: 38, atomicSymbol: 'Sr', atomicName: 'Strontium', atomicWeight: 87.62 },
    { atomicNumber: 39, atomicSymbol: 'Y', atomicName: 'Yttrium', atomicWeight: 88.90 },
    { atomicNumber: 40, atomicSymbol: 'Zr', atomicName: 'Zirconium', atomicWeight: 91.22 },
    { atomicNumber: 41, atomicSymbol: 'Nb', atomicName: 'Niobium', atomicWeight: 92.90 },
    { atomicNumber: 42, atomicSymbol: 'Mo', atomicName: 'Molybdenum', atomicWeight: 95.94 },
    { atomicNumber: 43, atomicSymbol: 'Tc', atomicName: 'Technetium', atomicWeight: 98.00 },
    { atomicNumber: 44, atomicSymbol: 'Ru', atomicName: 'Ruthenium', atomicWeight: 101.07 },
    { atomicNumber: 45, atomicSymbol: 'Rh', atomicName: 'Rhodium', atomicWeight: 102.90 },
    { atomicNumber: 46, atomicSymbol: 'Pd', atomicName: 'Palladium', atomicWeight: 106.42 },
    { atomicNumber: 47, atomicSymbol: 'Ag', atomicName: 'Silver', atomicWeight: 107.86 },
    { atomicNumber: 48, atomicSymbol: 'Cd', atomicName: 'Cadmium', atomicWeight: 112.41 },
    { atomicNumber: 49, atomicSymbol: 'In', atomicName: 'Indium', atomicWeight: 114.81 },
    { atomicNumber: 50, atomicSymbol: 'Sn', atomicName: 'Tin', atomicWeight: 118.71 },
    { atomicNumber: 51, atomicSymbol: 'Sb', atomicName: 'Antimony', atomicWeight: 121.76 },
    { atomicNumber: 52, atomicSymbol: 'Te', atomicName: 'Tellurium', atomicWeight: 127.6 },
    { atomicNumber: 53, atomicSymbol: 'I', atomicName: 'Iodine', atomicWeight: 126.90 },
    { atomicNumber: 54, atomicSymbol: 'Xe', atomicName: 'Xenon', atomicWeight: 131.29 },
    { atomicNumber: 55, atomicSymbol: 'Cs', atomicName: 'Cesium', atomicWeight: 13.90 },
    { atomicNumber: 56, atomicSymbol: 'Ba', atomicName: 'Barium', atomicWeight: 137.32 },
    { atomicNumber: 57, atomicSymbol: 'La', atomicName: 'Lanthanum', atomicWeight: 138.90 },
    { atomicNumber: 58, atomicSymbol: 'Ce', atomicName: 'Cerium', atomicWeight: 140.11 },
    { atomicNumber: 59, atomicSymbol: 'Pr', atomicName: 'Praseodymium', atomicWeight: 140.90 },
    { atomicNumber: 60, atomicSymbol: 'Nd', atomicName: 'Neodymium', atomicWeight: 144.24 },
    { atomicNumber: 61, atomicSymbol: 'Pm', atomicName: 'Promethium', atomicWeight: 145.00 },
    { atomicNumber: 62, atomicSymbol: 'Sm', atomicName: 'Samarium', atomicWeight: 150.36 },
    { atomicNumber: 63, atomicSymbol: 'Eu', atomicName: 'Europium', atomicWeight: 151.96 },
    { atomicNumber: 64, atomicSymbol: 'Gd', atomicName: 'Gadolinium', atomicWeight: 157.25 },
    { atomicNumber: 65, atomicSymbol: 'Tb', atomicName: 'Terbium', atomicWeight: 158.92 },
    { atomicNumber: 66, atomicSymbol: 'Dy', atomicName: 'Dysprosium', atomicWeight: 162.50 },
    { atomicNumber: 67, atomicSymbol: 'Ho', atomicName: 'Holmium', atomicWeight: 164.93 },
    { atomicNumber: 68, atomicSymbol: 'Er', atomicName: 'Erbium', atomicWeight: 167.5 },
    { atomicNumber: 69, atomicSymbol: 'Tm', atomicName: 'Thulium', atomicWeight: 168.93 },
    { atomicNumber: 70, atomicSymbol: 'Yb', atomicName: 'Ytterbium', atomicWeight: 173.04 },
    { atomicNumber: 71, atomicSymbol: 'Lu', atomicName: 'Lutetium', atomicWeight: 174.96 },
    { atomicNumber: 72, atomicSymbol: 'Hf', atomicName: 'Hafnium', atomicWeight: 178.49 },
    { atomicNumber: 73, atomicSymbol: 'Ta', atomicName: 'Tantalum', atomicWeight: 180.94 },
    { atomicNumber: 74, atomicSymbol: 'W', atomicName: 'Tungsten', atomicWeight: 183.84 },
    { atomicNumber: 75, atomicSymbol: 'Re', atomicName: 'Rhenium', atomicWeight: 186.20 },
    { atomicNumber: 76, atomicSymbol: 'Os', atomicName: 'Osmium', atomicWeight: 190.23 },
    { atomicNumber: 77, atomicSymbol: 'Ir', atomicName: 'Iridium', atomicWeight: 192.21 },
    { atomicNumber: 78, atomicSymbol: 'Pt', atomicName: 'Platinum', atomicWeight: 195.07 },
    { atomicNumber: 79, atomicSymbol: 'Au', atomicName: 'Gold', atomicWeight: 196.97 },
    { atomicNumber: 80, atomicSymbol: 'Hg', atomicName: 'Mercury', atomicWeight: 200.59 },
    { atomicNumber: 81, atomicSymbol: 'Tl', atomicName: 'Thallium', atomicWeight: 204.38 },
    { atomicNumber: 82, atomicSymbol: 'Pb', atomicName: 'Lead', atomicWeight: 207.20 },
    { atomicNumber: 83, atomicSymbol: 'Bi', atomicName: 'Bismuth', atomicWeight: 208.98 },
    { atomicNumber: 84, atomicSymbol: 'Po', atomicName: 'Polonium', atomicWeight: 209.00 },
    { atomicNumber: 85, atomicSymbol: 'At', atomicName: 'Astatine', atomicWeight: 210.00 },
    { atomicNumber: 86, atomicSymbol: 'Rn', atomicName: 'Radon', atomicWeight: 222.00 },
    { atomicNumber: 87, atomicSymbol: 'Fr', atomicName: 'Francium', atomicWeight: 223.00 },
    { atomicNumber: 88, atomicSymbol: 'Ra', atomicName: 'Radium', atomicWeight: 226.00 },
    { atomicNumber: 89, atomicSymbol: 'Ac', atomicName: 'Actinium', atomicWeight: 227.00 },
    { atomicNumber: 90, atomicSymbol: 'Th', atomicName: 'Thorium', atomicWeight: 231.03 },
    { atomicNumber: 91, atomicSymbol: 'Pa', atomicName: 'Protactinium', atomicWeight: 232.03 },
    { atomicNumber: 92, atomicSymbol: 'U', atomicName: 'Uranium', atomicWeight: 237.00 },
    { atomicNumber: 93, atomicSymbol: 'Np', atomicName: 'Neptunium', atomicWeight: 238.03 },
    { atomicNumber: 93, atomicSymbol: 'Np', atomicName: 'Neptunium', atomicWeight: 237.00 },
    { atomicNumber: 94, atomicSymbol: 'Pu', atomicName: 'Plutonium', atomicWeight: 244.00 },
    { atomicNumber: 95, atomicSymbol: 'Am', atomicName: 'Americium', atomicWeight: 243.00 },
    { atomicNumber: 96, atomicSymbol: 'Cm', atomicName: 'Curium', atomicWeight: 247.00 },
    { atomicNumber: 97, atomicSymbol: 'Bk', atomicName: 'Berkelium', atomicWeight: 247.00 },
    { atomicNumber: 98, atomicSymbol: 'Cf', atomicName: 'Californium', atomicWeight: 251.00 },
    { atomicNumber: 99, atomicSymbol: 'Es', atomicName: 'Einsteinium', atomicWeight: 252.00 },
    { atomicNumber: 100, atomicSymbol: 'Fm', atomicName: 'Fermium', atomicWeight: 257.00 },
    { atomicNumber: 101, atomicSymbol: 'Md', atomicName: 'Mendelevium', atomicWeight: 258.00 },
    { atomicNumber: 102, atomicSymbol: 'No', atomicName: 'Nobelium', atomicWeight: 259.00 },
    { atomicNumber: 103, atomicSymbol: 'Lr', atomicName: 'Lawrencium', atomicWeight: 262.00 },
    { atomicNumber: 104, atomicSymbol: 'Rf', atomicName: 'Rutherfordium', atomicWeight: 267.00 },
    { atomicNumber: 105, atomicSymbol: 'Db', atomicName: 'Dubnium', atomicWeight: 270.00 },
    { atomicNumber: 106, atomicSymbol: 'Sg', atomicName: 'Seaborgium', atomicWeight: 271.00 },
    { atomicNumber: 107, atomicSymbol: 'Bh', atomicName: 'Bohrium', atomicWeight: 270.00 },
    { atomicNumber: 108, atomicSymbol: 'Hs', atomicName: 'Hassium', atomicWeight: 277.00 },
    { atomicNumber: 109, atomicSymbol: 'Mt', atomicName: 'Meitnerium', atomicWeight: 276.00 },
    { atomicNumber: 110, atomicSymbol: 'Ds', atomicName: 'Darmstadtium', atomicWeight: 281.00 },
    { atomicNumber: 111, atomicSymbol: 'Rg', atomicName: 'Roentgenium', atomicWeight: 280.00 },
    { atomicNumber: 112, atomicSymbol: 'Cn', atomicName: 'Copernicium', atomicWeight: 285.00 },
    { atomicNumber: 113, atomicSymbol: 'Nh', atomicName: 'Nihonium', atomicWeight: 284.00 },
    { atomicNumber: 114, atomicSymbol: 'Fl', atomicName: 'Flerovium', atomicWeight: 289.00 },
    { atomicNumber: 115, atomicSymbol: 'Mc', atomicName: 'Moscovium', atomicWeight: 288.00 },
    { atomicNumber: 116, atomicSymbol: 'Lv', atomicName: 'Livermorium', atomicWeight: 293.00 },
    { atomicNumber: 117, atomicSymbol: 'Ts', atomicName: 'Tennessine', atomicWeight: 294.00 },
    { atomicNumber: 118, atomicSymbol: 'Og', atomicName: 'Oganesson', atomicWeight: 294.00 },
    
    // Add more elements as needed
];

function searchElement() {
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    let filteredElements;

    if (searchType === 'atomicNumber') {
        // Filter based on the selected atomic number
        const selectedAtomicNumber = parseInt(searchInput, 10);
        filteredElements = elements.filter(element => element.atomicNumber === selectedAtomicNumber);
    } else {
        // Filter based on other search types
        filteredElements = elements.filter(element => {
            const value = element[searchType].toString().toLowerCase();
            return value.includes(searchInput);
        });
    }

    updateResultTable(filteredElements);
}



function updateResultTable(filteredElements) {
    const resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '<tr><th>Atomic Number</th><th>Atomic Symbol</th><th>Atomic Name</th><th>Atomic Weight</th><th>Block</th><th>Metallic Property</th></tr>';

    filteredElements.forEach(element => {
        const block = determineBlock(element.atomicNumber);
        const property = determineProperty(element.atomicNumber);

        const row = `<tr>
            <td>${element.atomicNumber}</td>
            <td>${element.atomicSymbol}</td>
            <td>${element.atomicName}</td>
            <td>${element.atomicWeight.toFixed(2)}</td>
            <td>${block}</td>
            <td>${property}</td>
        </tr>`;

        resultTable.innerHTML += row;
    });
}

function determineBlock(atomicNumber) {
    // Add your logic to determine the block based on the atomic number
    if (atomicNumber >= 1 && atomicNumber <= 2) {
        return 's';
    } else if (atomicNumber >= 3 && atomicNumber <= 10) {
        return 'p';
    } else if (atomicNumber >= 11 && atomicNumber <= 18) {
        return 's';
    } else if (atomicNumber >= 19 && atomicNumber <= 36) {
        return 'p';
    } else if (atomicNumber >= 37 && atomicNumber <= 54) {
        return 'd';
    } else if (atomicNumber >= 55 && atomicNumber <= 86) {
        return 'p';
    } else if (atomicNumber >= 87 && atomicNumber <= 118) {
        return 's';
    } else {
        return 'Unknown';
    }
}

function determineProperty(atomicNumber) {
    // Add your logic to determine the metallic property based on the atomic number
    if (atomicNumber <= 2 || (atomicNumber >= 13 && atomicNumber <= 18) || (atomicNumber >= 31 && atomicNumber <= 36) || (atomicNumber >= 49 && atomicNumber <= 54) || (atomicNumber >= 81 && atomicNumber <= 86)) {
        return 'Non-Metal';
    } else if ((atomicNumber >= 5 && atomicNumber <= 12) || (atomicNumber >= 23 && atomicNumber <= 30) || (atomicNumber >= 41 && atomicNumber <= 48) || (atomicNumber >= 73 && atomicNumber <= 80) || (atomicNumber >= 105 && atomicNumber <= 112)) {
        return 'Metalloid';
    } else {
        return 'Metal';
    }
}