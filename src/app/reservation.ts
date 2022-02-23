export interface Reservation {
    id: number,
    nombreAdulte: number,
    nombreEndant: number,
    assurance: boolean,
    fk_forfaits: number
}
