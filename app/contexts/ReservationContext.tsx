import React, { createContext, useContext, useEffect, useState } from 'react';


type Reservation = { logementId: string; nom: string; date: string };
const ReservationContext = createContext<{reservations: Reservation[]; addReservation: (r: Reservation) => void }>({ reservations: [], addReservation: () => {} });

export const useReservation = () => useContext(ReservationContext);

import { ReactNode } from 'react';

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const addReservation = (r: Reservation) => setReservations(res => [...res, r]);
  // Persistence: load on mount, save on change
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const { default: AsyncStorage } = await import('@react-native-async-storage/async-storage');
        const raw = await AsyncStorage.getItem('reservations');
        if (!isMounted) return;
        if (raw) {
          const parsed = JSON.parse(raw) as Reservation[];
          setReservations(Array.isArray(parsed) ? parsed : []);
        }
      } catch {
        // ignore load errors
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { default: AsyncStorage } = await import('@react-native-async-storage/async-storage');
        await AsyncStorage.setItem('reservations', JSON.stringify(reservations));
      } catch {
        // ignore save errors
      }
    })();
  }, [reservations]);

  return <ReservationContext.Provider value={{ reservations, addReservation }}>{children}</ReservationContext.Provider>;
}
