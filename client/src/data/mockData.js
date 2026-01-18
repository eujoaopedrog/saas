// Simulating a database response for a specific clinic
export const initialPatients = [
    {
        id: '1',
        name: 'Ana Silva',
        phone: '11999887766',
        procedure: 'Clareamento Dental',
        value: 1200.00,
        status: 'negotiation',
        clinicId: 'clinic-123'
    },
    {
        id: '2',
        name: 'Carlos Oliveira',
        phone: '11988776655',
        procedure: 'Implante Dentário',
        value: 4500.00,
        status: 'scheduled',
        clinicId: 'clinic-123'
    },
    {
        id: '3',
        name: 'Mariana Costa',
        phone: '11977665544',
        procedure: 'Ortodontia',
        value: 200.00,
        status: 'closed',
        clinicId: 'clinic-123'
    },
    {
        id: '4',
        name: 'Roberto Santos',
        phone: '11966554433',
        procedure: 'Limpeza',
        value: 350.00,
        status: 'lost',
        clinicId: 'clinic-123'
    },
    {
        id: '5',
        name: 'Julia Lima',
        phone: '11955443322',
        procedure: 'Canal',
        value: 900.00,
        status: 'analysis',
        clinicId: 'clinic-456' // Data from another clinic (should be filtered out)
    }
];
