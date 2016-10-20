var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  // this.imgAttribution = ko.observable();
  this.nickNames = ko.observableArray(['name1','name2','name3']);

  this.level = ko.computed(function() {
    if(this.clickCount() < 10){ return 'Newborn' };
    if(this.clickCount() >= 10 && this.clickCount() < 20){ return 'Infant' };
    if(this.clickCount() >= 20 && this.clickCount() < 30){ return 'Amateur' };
    if(this.clickCount() >= 30 && this.clickCount() < 40){ return 'Normal' };
    if(this.clickCount() >= 40 && this.clickCount() < 50){ return 'Middle' };
    if(this.clickCount() >= 50 && this.clickCount() < 60){ return 'Senior' };
    if(this.clickCount() >= 60){ return 'Monster!' };
  }, this);
}

var ViewModel = function() {
  var self = this
  self.currentCat = ko.observable(new Cat());
  self.newNickname = ko.observable('');

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  self.addNickname = function() {
    self.currentCat().nickNames.push(self.newNickname());
    self.newNickname('');
  }

  self.removeNickname = function(data) {
    self.currentCat().nickNames.remove(data);
  }
}

ko.applyBindings(new ViewModel());
