const API_URL = "https://lldev.thespacedevs.com/2.2.0/";


export async function getUpcomingLaunches(){

    return await fetch(API_URL+"launch/upcoming/")
    .then((response) => {
        console.log("Getting Response");
        return response.json();
    })
    .then((data) => {
        console.log("Response Recieved");
        console.log(data);
        return processLaunchData(data.results);
    })
}

function processLaunchData(data: any){
    let processedData = data.map((launch: any) => {
        return {
            // Dashboard Launch Data
            id: launch.id,
            sd_id: launch.id,
            name: launch.name,
            net: launch.net,
            launch_provider: launch.launch_service_provider,
            mission: launch.mission,
            window_start: launch.window_start,
            window_end: launch.window_end,
            image: launch.image,
        }
    });
    return processedData;
}

function convertTime(time: string){
    let date = new Date(time);
    return date.toLocaleString();
}