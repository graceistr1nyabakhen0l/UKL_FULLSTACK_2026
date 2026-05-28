import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export const dokterApi = {
    getAll: () => api.get('/dokter'),
    create: (data: any) => api.post('/dokter', data),
    update: (id: number, data: any) => api.patch(`/dokter/${id}`, data),
    remove: (id: number) => api.delete(`/dokter/${id}`),
};

export const obatApi = {
    getAll: () => api.get('/obat'),
    create: (data: any) => api.post('/obat', data),
    update: (id: number, data: any) => api.patch(`/obat/${id}`, data),
    remove: (id: number) => api.delete(`/obat/${id}`),
};

export const userApi = {
    getAllPasien: () => api.get('/user/pasien'),
    getOne: (id: number) => api.get(`/user/${id}`),
    remove: (id: number) => api.delete(`/user/${id}`),
};

export const appointmentApi = {
    getAll: () => api.get('/appointment'),
    updateStatus: (id: number, status: string) =>
        api.patch(`/appointment/${id}/status`, { status }),
    inputObat: (id: number, items: any[]) =>
        api.post(`/appointment/${id}/obat`, { items }),
};

export const transactionApi = {
    getAll: () => api.get('/transaction'),
};

export default api;