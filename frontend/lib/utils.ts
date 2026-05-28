export function formatRupiah(amount: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(amount);
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('id-ID');
}

export const STATUS_LABEL: any = {
    MENUNGGU_KONFIRMASI: 'Menunggu Konfirmasi',
    DISETUJUI: 'Disetujui',
    DITOLAK: 'Ditolak',
    MENUNGGU_PILIHAN_OBAT: 'Menunggu Pilihan Obat',
    SELESAI_KONSULTASI: 'Selesai Konsultasi',
    SELESAI: 'Selesai',
    BATAL: 'Batal',
};

export const STATUS_COLOR: any = {
    MENUNGGU_KONFIRMASI: 'bg-yellow-100 text-yellow-700',
    DISETUJUI: 'bg-blue-100 text-blue-700',
    DITOLAK: 'bg-red-100 text-red-700',
    MENUNGGU_PILIHAN_OBAT: 'bg-purple-100 text-purple-700',
    SELESAI_KONSULTASI: 'bg-cyan-100 text-cyan-700',
    SELESAI: 'bg-green-100 text-green-700',
    BATAL: 'bg-slate-100 text-slate-700',
};

export function getUser() {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
}

export function clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}