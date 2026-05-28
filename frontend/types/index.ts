export interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
    _count?: {
        appointments: number;
    };
}

export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    price: number;
    schedule: string;
}

export interface Obat {
    id: number;
    name: string;
    type: string;
    price: number;
    stock: number;
    image?: string;
}

export type AppointmentStatus =
    | 'MENUNGGU_KONFIRMASI'
    | 'DISETUJUI'
    | 'DITOLAK'
    | 'MENUNGGU_PILIHAN_OBAT'
    | 'SELESAI_KONSULTASI'
    | 'SELESAI'
    | 'BATAL';

export interface Appointment {
    id: number;
    user?: User;
    doctor?: Doctor;
    complaint: string;
    date: string;
    status: AppointmentStatus;
}

export interface TransactionItem {
    id: number;
    quantity: number;
    priceAtBuy: number;
    obat?: Obat;
}

export interface Transaction {
    id: number;
    patientName: string;
    doctorFee: number;
    totalAmount: number;
    paymentMethod: string;
    status: string;
    items?: TransactionItem[];
}