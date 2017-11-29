import { Md5 } from 'ts-md5/dist/md5';

export class Event {
    owner_id: number;
    date: string;
    time: string;
    name: string;
    city: string;
    address: string;
    going: number;
    description: string;
    id: number;
    trashedBy: any;
    checkedBy: any;
}

export function DBToMD5(context) {
    let eventsDBHash = [Md5.hashStr(JSON.stringify(context.eventsDB))];
    localStorage.setItem("eventsDBHash", JSON.stringify(eventsDBHash));
    localStorage.setItem("eventsDB", JSON.stringify(context.eventsDB));

    let request = context.http.put("https://click-e25d0.firebaseio.com/click/hashes.json/", eventsDBHash);
    request.subscribe();
}