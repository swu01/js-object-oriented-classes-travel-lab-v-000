class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
      return endDate - this.startDate.getFullYear() - 1;
  }
}

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let beginningBlock = eastWest.indexOf(this.beginningLocation.horizontal);
    let endingBlock = eastWest.indexOf(this.endingLocation.horizontal);
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontalDistance = (Math.abs(beginningBlock - endingBlock));
    return verticalDistance + horizontalDistance
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
