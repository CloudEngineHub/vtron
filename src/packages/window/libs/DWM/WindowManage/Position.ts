import { System } from '@libs/System';
function setPosition(system: System, id: string,x:number, y:number) {
    system.DWM.getWindow(id).windowInfo.x = x;
    system.DWM.getWindow(id).windowInfo.y = y;
}
function getPosition(system: System, id: string) {
    return {
        x:system.DWM.getWindow(id).windowInfo.x,
        y:system.DWM.getWindow(id).windowInfo.y
    }
}
function center(system: System, id: string) {
    
}
export {
    setPosition,
    getPosition,
    center
}