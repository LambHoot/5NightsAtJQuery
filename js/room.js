
class Room {
  constructor(num, level, img) {
    this.num = num;
	this.level = level;
    this.img = img;
		this.UpdateRoom = function() {
			//double monster rooms
			if(((this.num == 0) || (this.num == 1)) || (this.num == 8)){
				if(LM_position == this.level && RM_position == this.level){
					this.img = "./images/rooms/room" + this.num +"f&l.png";
				}
				else if(LM_position == this.level){
					this.img = "./images/rooms/room" + this.num +"f.png";
				}
				else if(RM_position == this.level){
					this.img = "./images/rooms/room" + this.num +"l.png";
				}
				else{
					this.img = "./images/rooms/room" + this.num +"e.png";
				}
			}
			//left monster rooms
			else if((((this.num == 2) || (this.num == 4)) || (this.num == 6)) || (this.num == 9)){
				if(LM_position == this.level){
					this.img = "./images/rooms/room" + this.num +"f.png";
				}
				else{
					this.img = "./images/rooms/room" + this.num +"e.png";
				}
			}
			//right monster rooms
			else if((((this.num == 3) || (this.num == 5)) || (this.num == 7)) || (this.num == 10)){
				if(RM_position == this.level){
					this.img = "./images/rooms/room" + this.num +"l.png";
				}
				else{
					this.img = "./images/rooms/room" + this.num +"e.png";
				}
			}
		}
	}
}

//this will make someone cry
//this will make me cry
//I need like a graph structure to automate the map if ever I refactor
//I probably won't ever refactor

var rooms = [];
rooms.push(new Room(0,0,"default"));
rooms.push(new Room(1,1,"default"));
rooms.push(new Room(2,2,"default"));
rooms.push(new Room(3,2,"default"));
rooms.push(new Room(4,3,"default"));
rooms.push(new Room(5,3,"default"));
rooms.push(new Room(6,4,"default"));
rooms.push(new Room(7,4,"default"));
rooms.push(new Room(8,5,"default"));
//rooms.push(new Room(9,6,"default"));
//rooms.push(new Room(10,6,"default"));

function UpdateAllRooms(){
	for(var i = 0; i < rooms.length; i++){
		rooms[i].UpdateRoom();
	}
}
UpdateAllRooms();

function resetRooms(){
	rooms = [];
	rooms.push(new Room(0,0,"default"));
	rooms.push(new Room(1,1,"default"));
	rooms.push(new Room(2,2,"default"));
	rooms.push(new Room(3,2,"default"));
	rooms.push(new Room(4,3,"default"));
	rooms.push(new Room(5,3,"default"));
	rooms.push(new Room(6,4,"default"));
	rooms.push(new Room(7,4,"default"));
	rooms.push(new Room(8,5,"default"));
	//rooms.push(new Room(9,6,"default"));
	//rooms.push(new Room(10,6,"default"));
}