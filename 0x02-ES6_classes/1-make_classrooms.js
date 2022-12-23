import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // room1 = ClassRoom(19);
  // room2 = ClassRoom(20);
  // room3 = ClassRoom(34);
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
