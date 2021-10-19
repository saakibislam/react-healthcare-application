const data = [
    {
        id: 1,
        name: 'ASM Zahed',
        department: 'Medicine',
        subjects: ['MBBS,', 'FCPS (Medicine)'],
        fees: 800,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i0.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrASMJahed.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 2,
        name: 'Prabir Kumar Das',
        department: 'Cardiology',
        subjects: ['MBBS, FCPS (MEDICINE),', 'MD (CARDIO, NICVD),', 'FACC (USA) POSTDOCTORAL FELLOW'],
        fees: 900,
        study: 'Chittagong Medical',
        chamber: 'Epic Healthcare',
        img: 'https://www.epichcl.com/public/storage/doctors/August2021/t48dC0WU4M03vTHXKpXz.png'
    },
    {
        id: 3,
        name: 'Rafiqul hasan',
        department: 'Nephrology',
        subjects: ['MBBS,', 'MCPS (Medicine),', 'FCPS (Medicine),', 'MD (Nephrology)'],
        fees: 500,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i0.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrRafiqulHasan-Nephrology.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 4,
        name: 'Muslim Uddin Shobuj',
        department: 'Pediatrics',
        subjects: ['MBBS,', 'DCH MD (Child Health)'],
        fees: 700,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrMuslimUddinSabuj-Paediatrics.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 5,
        name: 'Probal Chakrabarty',
        department: 'Cardiology',
        subjects: ['MBBS,', 'BCS(HEALTH) D-CARD (CARDIOLOGY),', 'NICVD'],
        fees: 500,
        study: 'Dhaka Medical',
        chamber: 'Epic Healthcare',
        img: 'https://www.epichcl.com/public/storage/doctors/August2021/KBlifRGHod6JGLX1qWFX.jpg'
    },
    {
        id: 6,
        name: 'Marina Arjumand',
        department: 'Nephrology',
        subjects: ['MBBS,', 'BCS (Health),', 'MCPS (Medicine),', 'MD (Nephrology)'],
        fees: 500,
        study: 'Rangpur Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2019/10/merina-arjumand.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 7,
        name: 'Istiak Ahmed',
        department: 'Medicine',
        subjects: ['MBBS,', 'BCS (Health),', 'MCPS,', 'FCPS (Medicine),', 'MACP (USA)'],
        fees: 700,
        study: 'Coxsbazar Medical',
        chamber: 'Parkview',
        img: 'https://i0.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrIstiakAhmed-Medicine.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 8,
        name: 'Prof. Razaul Karim',
        department: 'Pediatrics',
        subjects: ['MBBS,', 'DCH (Dhaka),', 'MCPS (Paed.),', 'MSC,', 'MD (Paed),', 'FRCP (Glasgow)'],
        fees: 900,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i0.wp.com/parkview.com.bd/wp-content/uploads/2019/08/ProfRezaulMonno-Paed.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 9,
        name: 'Md. Syedul Alam Rajib',
        department: 'Medicine',
        subjects: ['MBBS,', 'BCS (HEALTH),', 'FCPS (MEDICINE)'],
        fees: 700,
        study: 'Chittagong Medical',
        chamber: 'Epic Healthcare',
        img: 'https://www.epichcl.com/public/storage/doctors/August2021/2MysutTdy8GWLqLb29wa.png'
    },
    {
        id: 10,
        name: 'Wakil Ahmed',
        department: 'Orthopedix',
        subjects: ['MBBS,', 'MCPS (Surgery),', 'MS (Ortho. Surgery),', 'MMED'],
        fees: 500,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrWakilAhmed-orthopedics.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 11,
        name: 'Mohammad Rezaul Karim',
        department: 'Medicine',
        subjects: ['MBBS,', 'BCS (Health),', 'MD (Internal Medicine),'],
        fees: 800,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrRezaulKarim-Medicine.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 12,
        name: 'MD SHAH ALAM',
        department: 'Pediatrics',
        subjects: ['MBBS (DMC),', 'BCS (Health),', 'MD (Child Health)'],
        fees: 500,
        study: 'Rangpur Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrShahAlam-Paedia.jpg?fit=600%2C600&ssl=1'
    },
    {
        id: 13,
        name: 'Mahamudur Rahman',
        department: 'Orthopedix',
        subjects: ['MBBS,', 'BCS (Health),', 'MS (Ortho.)'],
        fees: 500,
        study: 'Chittagong Medical',
        chamber: 'Parkview',
        img: 'https://i2.wp.com/parkview.com.bd/wp-content/uploads/2018/09/DrMahmudurRahman-orthopedics.jpg?fit=600%2C600&ssl=1'
    }
]