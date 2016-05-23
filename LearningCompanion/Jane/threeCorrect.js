(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/ThreeCorrect.mp3" || "sounds/ThreeCorrect.ogg", id:"ThreeCorrect"}
	]
};



// symbols:



(lib.gjanemouthside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"a, i":0,o:4,e:8,eh:12,u:16,"c k g j r s t h y z":20,"d l n t":24,"w q":28,oo:32,"m b p":36,"f v":40,"neutral smile":45});

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAJAWQASgGgogl");
	this.shape.setTransform(-6.3,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAmgUQgIgEgKABQgJABgUAQQgWAOgGAQ");
	this.shape_1.setTransform(1.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABEgMIACgEQADgJACgIQABgIABgIIgCAAQhFAOgegJIgMAKQgEAGgUgDQgFgBgEgBQgDgBgEAAIABAJQABABABABQAGAFAKACQAHAAAHgBQAHgBAGgBQAIgCAHgCQAJgCAIgCQAFgCAFgBQAJgCAIgCQAKgDAJgDQAGgCAHgCQAHgCAHgDABEgMQgCAEgCADQgFAFgFAFQgHAFgIAEQgEADgFACQgFACgGACQgGACgGABQgHABgFABIgcgBIgDAFQgBADABAEQAAABAAABQADACAFAEQAGAEAMgCQAKgBAJgCQAJgBAHgDQAGgDAHgEQAIgFAFgGQAHgIAEgIQACgFACgDQABgGABgGg");
	this.shape_2.setTransform(-1.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C49162").s().p("AgbAvIgIgGIAAgCIAAgHIADgFIAcABIAMgCIAMgDIAKgEQAFgCAFgDQAIgEAHgFQAFgFAFgFIAEgHIgDAMIgDAIQgFAIgGAIQgGAGgHAFIgOAHQgGADgKABIgSADIgGABQgHAAgFgDgAhIgXIgCgCIgBgJIAHABIAIACQAUADAFgGIAMgKQAdAJBGgOIgOAFIgOAEIgSAGIgRAEIgLADIgQAEIgPAEIgNACIgPABQgJgCgGgFg");
	this.shape_3.setTransform(-2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B3141").s().p("AgJgGQAUgQAJgBQAKgBAIAEIgCAEIgEAHQgFAHgFADQgHAFgIAEQgEADgDACIgLAEIgMADIgOACQAGgQAWgOg");
	this.shape_4.setTransform(1.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402424").s().p("AgqAmQASgGgrglIAPgBIANgCIAPgEIASgEIAJgDIARgEIASgGIAOgEIAOgFIABAAIgCAQIgEARQgIgEgKABQgJABgWAOQgUAQgGAQg");
	this.shape_5.setTransform(-1,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AAogOQgGgBgQgBQgPgBgDAAQgfACgHAdQgBACAAAC");
	this.shape_6.setTransform(0.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA1gXIACABQADABAFADQADACABABIgBAAIAAABIAAABQgDAPgGAMQgHAPgIAGQgHAEgNAEQgKADgGAAQgGABgIAAQgIgBgEgBQgFgCgFgCQgGgDgDgGQgDgFALgIQAAAFAPACIABAAQARACANgDQAagFAJgLQAIgIAFgHAA1gXIgBAAQgUgLg0gMQgIALgOABQgOABgIgGQgDAJABABQABADACACQAEAFAIACQABACAHADQAcAMgNANQgDADAAADAA2gWIgBgBAA2gWIgEgCIACABABDgPQABABgBgBIgBAAAgzgRQgDgJA5ABQAjgBAQAE");
	this.shape_7.setTransform(-2.2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C49162").s().p("AgIAvIgMgCIgKgEQgGgDgCgGQgDgFALgIQgBAFAQACIAAAAQARACANgDQAbgFAIgLQAIgIAGgHIADgIIAAABQgDAPgGAMQgIAPgHAGQgHAEgNAEQgLADgGAAIgIABIgGAAgAg+gYIgEgFQgBgBADgJQAIAGAOgBQAOgBAJgLQAzAMAVALIgCgBIADACQgPgEgkABQg4gBADAJQgIgCgEgFg");
	this.shape_8.setTransform(-2.2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#402424").s().p("AgmAUQgBgDAEgDQAMgOgcgLQgGgEgBgCQgDgIA6AAQAigBAPAEIAAAAIABAAIAJAFIADACIAAABIAAgBQABABgBAAIAAAAIAAAAIgDAJQgGgCgQgBIgTAAQgeABgHAdIgBAEQgQgBABgFgAAugWIgDgBIACAAIABABIAAAAIAAAAgAAugWg");
	this.shape_9.setTransform(-1.4,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B3141").s().p("AgnARIABgDQAHgeAfgBIATAAQAPABAGACQgGAJgHAFQgJALgYAGQgIABgJAAIgQgBgAgnARIAAAAIABgDIgBADIAAAAg");
	this.shape_10.setTransform(0.2,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgMgLQABACAGADQATAIgBAK");
	this.shape_11.setTransform(-6.7,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAggRIgSgBQgxAFAEAg");
	this.shape_12.setTransform(-0.3,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA0gXQgSgHgiAEQg0AGAEAIQgHgDgDgGQgDgHACgGIATACQALgJAGgFQALABAYAHQAcAIAMAHgAA6gGQgLAVgmAGQgIACgEAAQgZADAGgKQABgDAAgCQgRAHAFAIQAFAJAHAGQAGAGAQgBQARgBAQgIQAQgJAIgiQABgBAAgCQABgCABgCQAAgCgDgEQgEgDgCgB");
	this.shape_13.setTransform(-3.1,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C49162").s().p("AgUApQgGgGgFgJQgFgIAQgHIgBAFQgGAKAagDIALgCQAmgGALgVQgIAigQAJQgQAIgRABIgCABQgOAAgGgGgAg5gVQgCgHABgGIATACIARgOQALABAZAHQAcAIALAHQgRgHgjAEQg0AGAEAIQgGgDgEgGg");
	this.shape_14.setTransform(-3.2,2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B3141").s().p("AAOgSIASABIgBAEIgBADQgMAVgjAGIgOACQgEggAxgFg");
	this.shape_15.setTransform(-0.3,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#402424").s().p("AgcASIABgFQABgKgVgIQgGgCgBgDQgEgIA3gGQAggDARAGIAGAFQAEAEgBACIgSgCQgyAFAFAhIgJAAQgPAAAEgIg");
	this.shape_16.setTransform(-2.5,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BE8552").ss(0.5,1,1).p("Ag9gfQgGgCgEgGQAIgBAIAAQAIABAIgCQAGgFAGgDQACAAABgBQAAAAAAAAQAIACAIABQAHABAFABQAHAAAZgCQAYgCAIAQQAFAFgCAKIAAAAQAAgBABgCQgBACAAABQAAABAAAAQgMAhgIAKQgHALgMAFQgLAFgPADQgNACgKgEQgKgFgBgDQgBgDgBgCQgBgCACgEQADgDAEABAg9gfQAPABBAgJQAogGAKAMABHgSQgCAHgBABQgQAkgXAGQgXAFgOgBQgHgBgHgCQACgDABgCQANgag3gh");
	this.shape_17.setTransform(-2.6,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C49162").s().p("AgQAwQgLgFgBgDIgCgFQgBgCADgEQADgDADABIAEABIgDAFQAGACAHABQAOABAXgFQAYgGAQgkIADgIIAAAAIAAABQgMAhgIAKQgIALgLAFQgMAFgPADIgIABQgIAAgGgDgAg8gfQgGgCgEgGIAPgBQAJABAHgCQAHgFAGgDIADgBIAAAAIAQADIAMACQAHAAAYgCQAYgCAIAQQgKgMgnAGQg6AJgSAAIgDgBg");
	this.shape_18.setTransform(-2.6,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#402424").s().p("AgNAnQgHgBgGgCIADgFQAMgZg2giQAOACBAgKQAogGAKAMQAFAFgCAKIAAAAIgDAIQgQAkgXAGQgTAEgLAAIgHAAg");
	this.shape_19.setTransform(-2.1,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABGgSQACAEAAAEQgCAIgDAEQgSAdg5AEQgMABgQgDIAAgOIAAgLQgBgJgigJQAzgWAfgCQAXgBASAFQAGACAEAD");
	this.shape_20.setTransform(-1.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABIgVQgBgBgBgBQgBgBgCgBQgBgCgCgBQgFgDgFgDQgQgKgOgBQgSAAgZABQgIAKgPADQgPADgFgBQgEAAgDAIQgDAHADACABEAAQgLAmgtAFQgrAGgHgHQgGgGgBgDQAAgKALgG");
	this.shape_21.setTransform(-1.5,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C49162").s().p("AgkAqQgGgGgBgDQAAgKALgGIAAANQAQADAMgBQA5gEARgcQgMAmgtAFQgSADgNAAQgPAAgDgEgAhEgVQADgIAFAAQAFABAPgDQAOgDAJgKIArgBQANABARAKIAAACQgSgGgYABQgeADgzAWQgEgCADgHg");
	this.shape_22.setTransform(-1.7,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#402424").s().p("AgkAhIAAgOIAAgLQgBgJgigJQAzgWAfgCQAXgBASAFIAKAFIADACIADADIACACQACAEAAAEQgCAIgDAEQgSAdg4AEIgGAAQgKAAgNgCg");
	this.shape_23.setTransform(-1.3,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAugTQABACACACQAEAFACAGQABAEABABQAFAQgHAFQgEACgJgBQgNgCgQACQgOACgTAGQABgCAAgDQAAgDgBgEQgHghgYABQAAgBAAAAQgEAAgCgCQAAAAgBgBQAAgBAAgBQgBgFADgFQAJgBAGgBQAFgBACAAQADgBALgLQAUADAFACQAGABANAAQANABAJASQgQgQgeADQgrAFgIANAgXAZQgDABgBACQgBAGADAGQABADADABQAMABAKAAQAMgBADAAQAFgBALgEQALgDAMgO");
	this.shape_24.setTransform(-2.3,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.5,1,1).p("AAWgKQgqAGgBAP");
	this.shape_25.setTransform(1.2,2.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C49162").s().p("AgTAsQgCgBgCgDQgDgGACgGQAAgCADgBIAFABIgBAFQARgGAPgCQAQgCANACQAJABAEgCQgMAOgLADIgPAFIgQABIgEAAIgSgBgAg3gQIAAgBIgBgCQAAgFADgFIAOgCIAIgBQACgBAMgLIAZAFIASABQANABAJASQgQgQggADQgpAFgIANIgBAAQgDAAgCgCg");
	this.shape_26.setTransform(-2.6,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B3141").s().p("AAFALQgKgDgRADQABgPAqgGQAEAOgHAFQgDACgEAAIgGAAg");
	this.shape_27.setTransform(1.3,2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#402424").s().p("AgVAcIgBgIQgIghgYABIABgBQAHgNArgFQAfgDAPAQIADAEQAEAFACAGIADAFQgsAGgBAQQgNACgTAGIABgEg");
	this.shape_28.setTransform(-2.1,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABMgfIABACQgFAagUAVQgSATgOAEQgXAHgVgFQgTgEgHgKIACgJQAlAEAkgIQAMgDAQgNQAQgNAIgQAhAgTQgGgFgCgCQgCgCgCgIQATAFATAEIAOgJQAKgJAEABQADABAMABQAKAAA9AIQhOATg+gEg");
	this.shape_29.setTransform(-1.1,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgbIAAADAg2AcQAGgHABgJQgBgCgBgDQgEgHgRgMABHgWQgoAbhQAC");
	this.shape_30.setTransform(-0.5,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C49162").s().p("AgYArQgTgEgHgKIACgJQAlAEAkgIQAMgDAQgNQAQgNAIgQQgFAagUAVQgSATgOAEQgPAEgLAAQgKAAgIgCgAhAgTIgIgHQgCgCgCgIIAmAJIAOgJQAKgJAEABIAPACIBHAIQhDAQg1AAIgUgBg");
	this.shape_31.setTransform(-1.1,2.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2AbQAGgHAAgJIgBgEQBQgDAogbQgIAQgQANQgQAOgMACQgYAGgZAAIgYgBgAgxAHQgEgHgRgMQA+ADBOgSIAAACIABACQgoAbhQADIAAAAgABHgXIAAAAg");
	this.shape_32.setTransform(-0.5,1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABMgWQgBgBgEgBQgEgBgLgFQgLgEgUgBQgTgBgmABQgJAGgJAEQgIAFgSgGQACAIABAEQABADAJAAQBygeAZAVABNgUQgJAUgaAMQgaAMgHADQgIADgJACQgMACgFgBQgGgBgFACQgEACgGAAQgDAAgEgBQgEgCgCgBQgBAAAAgCQgBgBgBgCQgBgEAHgFQAWgCAigGQAjgFASgIQASgJAGgIg");
	this.shape_33.setTransform(-0.9,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgRIAAAAIgBgCIAAgBQAAABABACQgeAJgsAFQgqAEgRAEQAAgFgGgJAg/AFIAAABQAAAIAAAHIAAAA");
	this.shape_34.setTransform(-0.2,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C49162").s().p("AguAkIgHgBIgGgDIgCgCIgBgDQAAgEAGgFIA4gIQAjgFASgIQASgJAGgIQgJAUgaAMQgaAMgHADIgRAFQgMACgFgBQgGgBgEACQgFACgGAAIAAAAgAhJgOIgDgMQASAGAIgFIASgKQAmgBATABQAUABALAEIAPAGQAEABAAABIAAAAIABACQgZgVhxAeIgCAAQgIAAgBgDg");
	this.shape_35.setTransform(-0.9,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag/AYIAAgPIAAAAQARgFAqgEQAsgFAegJQgeAJgsAFQgqAEgRAFQAAgHgGgHQBxgeAaAVIAAAAQgGAHgSAIQgRAJgiAGIg6AIg");
	this.shape_36.setTransform(-0.2,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA4gTQgCAAgCgBQgSgBgDgBIgBABQgggBgXADQgPACgXAFIgGgEIgEgKQAQAHAJgGQARgJAIABQAMAAAiAFQAqAGAJAGQgKgCgIgBgAg6AQQA1gHAWgBQAZAAAPgLQAEgDACgEQAHgFAEAAQgJAPgIAHQgOAQgXABQg1ACgIACQgIABgIAGQgCgBgBgCQgCgGgBgIQgBgEAHAA");
	this.shape_37.setTransform(0,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("Ag4gDQADAHgDAJIgBACAg/gOQAFAGACAFABAgLIh4AI");
	this.shape_38.setTransform(-0.1,1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C49162").s().p("Ag8AgQgCgGgBgIQgBgEAHAAIgBACQA1gHAWgBQAZAAAPgLIAGgHQAHgFAEAAQgJAPgIAHQgOAQgXABQg1ACgIACQgIABgIAGQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAgAhFgQIgEgKQAQAHAJgGQARgJAIABQAMAAAiAFQAqAGAJAGIgSgDIgEgBIgVgCIgBABQgggBgXADQgPACgXAFg");
	this.shape_39.setTransform(0,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag8ASQAEgKgDgIIB4gGIgGAGQgPALgaAAQgVABg1AHgAg8gEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIANgBIASgDIADABIACgBIAEAAQADgCAHAAIAIgBIACAAIABAAIAGABIAAAAIAHgBIANgBIABAAIAVACIAEAAIADACIACgBQAEAAABADIgCADIgFACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgHABIgIgBQgCADgKAAQgFABgDgCIAAABQgLACgLAAIgJgBIgGABIgMACIgDAAIgJABQgPgBgDgCg");
	this.shape_40.setTransform(0.3,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABBgfQgJgCgVABQgaABgeACQgeACgLAFIgHgFQgCgFADgIQAPADAKAAQALABAUgJQAHAEARABQATABANADQAOADAHACgABBgKQADgFABgEQADgIgDgCQgBgBgDgBABCgMQgBABAAABABCgMQgFAHgEAFQgBAAAAAAQgMAQgDADQgPARhCgDIgBgGQgGACAAADQgBAFABAEQACAEAtAAQAsABAVg4QgCAFgEAFIgBAAIABAAQABgCAGgKg");
	this.shape_41.setTransform(-1.8,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AgrAJQACgJAQgFQAUgGAvAIQAAAAABAAIABAA");
	this.shape_42.setTransform(-0.2,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.5,1,1).p("AgsAZIAAgEQAAgFgCgGQAIAAAIAAQAygBAhgJQABgBACAAAg/gVQgBgBgCgCIABAAIACADQAFAFADAGQA8gGA+gF");
	this.shape_43.setTransform(-1.5,2.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C49162").s().p("AACAtQgsAAgCgEQgBgEABgFQAAgDAGgCIABAHQBCACAPgRIAPgTIACAAIABAAIAGgKQgVA3gtABIAAgBgAhCgaQgCgGADgIQAPADAKABQALAAAUgIQAHADARABQATABANADIAVAFQgJgCgVABIg4ADQgeACgLAFg");
	this.shape_44.setTransform(-2.1,2.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B3141").s().p("AgZgFQAUgGAvAIIABAAIAAAAIgDABIACgBIgCABQghAKgxABQABgJAQgFgAAogCIAAAAg");
	this.shape_45.setTransform(-0.3,2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#402424").s().p("AgzAQQgCgLgHgJIB5gLIgEAJIAAgCIgIALQgxgGgSAEQgQAFgBAKIgIAAIgIAAgAAyADIAHgLIAAACIgGAJgAAyADIgBAAIAIgLIgHALgAAxADIAAAAgAA5gIIAAAAg");
	this.shape_46.setTransform(-1,1.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgrAhIgBgGIgBgEIgBgLIAPAAQAygBAhgLIgPATQgNAPg0AAIgPgBgAA3AAIAAAAIAAAAgAhAgTIgCgDQALgFAfgCIA4gDQAUgBAJACIAFACQADACgDAIIh5ALIgJgLgAhCgWIAAAAIACADIgCgDgAhCgWg");
	this.shape_47.setTransform(-1.4,2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABDgCIAAAAQgDgEgIgEQAAgBgKgFQgKgHgUgDQg7gKgOAPQgGgCgBgDQgCgDAAgDQAJgBAJgBIAPgIQATAAAPAFQA9ATAFAQQAAAAAAABIAAABIAAAAQgKARgOALQgPAMgPAAQgcABgGAAQgGAAgGACQgGABgEgDQgEgDAAAAQgBgBAAgCQgCgEABgFQABgEAFgBQAAADgBADQAmABATgEQAggHAWgR");
	this.shape_48.setTransform(-1.4,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.5,1,1).p("AgUADQAQgQAQACIAoABAA+AAIAAgBQgvACgXACIgMAAAAqgQQgPgBgmAEQgfACgMAEIgHgNIAAgBAgvAWQAAgFgDgDQgDgEAEgEQABgBAIgBQAMgBAIAA");
	this.shape_49.setTransform(-1,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C49162").s().p("AgrApIgEgDIgBgDQgBgEAAgFQABgEAFgBIgBAGQAnABASgEQAggHAWgRIAAAAQgKARgOALQgPAMgPAAIgiABQgGAAgGACIgDAAQgEAAgDgCgAA4gKIgKgGQgKgHgUgDQg7gKgOAPQgGgCgBgDQgCgDAAgDIASgCIAPgIQATAAAPAFQA+ATAEAQIgBAAQgCgEgIgEg");
	this.shape_50.setTransform(-1.4,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#402424").s().p("Ag1gBQANgEAegDQAngEAOACIAKAGIgogBQgQgCgQAPIgTABQgJABgBABQAFgLgKgBg");
	this.shape_51.setTransform(-1.1,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgxAdIABgGQAAgFgCgDQgEgEAEgEQACgBAIgBIAUgBIAMAAIBGgEIAAAAIABAAQgWATggAHQgRADggAAIgJAAgAg9gTIAAAAQAOgPA6AKQAUADALAHQgPgCgmAEQgfADgMAEg");
	this.shape_52.setTransform(-1,1.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9B3141").s().p("AgHgGIAmABQAIAEACACIhGAGIgMAAQAQgPASACg");
	this.shape_53.setTransform(1.1,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAuglQAAAAgBAAQg1ACgNAJQgTAMgRAAQgBAAgBAAQAAgBgBAAQgBgBgCgDQAAgBgBgBQgCgDAAgEQANAHAFgDQAFgDAOgMQAVgGAVAAQABgBAQADQABAAACAAIABAAQAVADAMACQgLAAgKABgAA0gbQABgBAAAAQAHgGAHgCQgFAEgLAgQgJAYgOAAQggAAgNANQgIAIgPABQgLgIAJgJQAJgLAQgFQAQgFATABQAGAAANgSQAHgLAIgHg");
	this.shape_54.setTransform(-1.7,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.5,1,1).p("AAwghIAAABIhYAjIAAgBAgnAiQABgKACgEIBbgrIABgBAg4gKQALAFAFAHAg2gKQAKAFAEAH");
	this.shape_55.setTransform(-2,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C49162").s().p("AgqAdQAKgLAPgFQARgFASABQAGAAAMgSQAIgLAIgHIABgBIAAAAQAHgGAHgCQgEAEgMAgQgJAYgOAAQgfAAgOANQgIAIgOABQgMgIAJgJgAg7gOIgBgBIgDgEIgBgCQgCgDAAgEQANAHAGgDQAFgDAOgMQAUgGAVAAIASACIAHACIgEgCIAAAAIAhAFIgVABIgBAAIAAAAQg0ACgNAJQgUAMgRAAIgCAAg");
	this.shape_56.setTransform(-1.7,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkAYIBbgrQgIAHgIAMQgMASgGAAQgUgCgPAFQgPAFgKAMQABgKACgEgAgoAGQgEgHgKgFQARAAAUgMQANgIA0gCIhYAjgAAigjIADABIAEACIgHgDgAAigjIgGgCIAAAAIAHACIACABIgDgBg");
	this.shape_57.setTransform(-2,-0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#402424").s().p("AgwAKIBYgjIAAgBIABABIAHAIIAAAAIgBABIABgBIgBABIhbArQgBgKgDgHgAApgZIgBAAIABgBIAAABg");
	this.shape_58.setTransform(-1.2,-0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgeAKQAIgQgEgFQgCgCgSgIIATgFQANAAAdgGIAmABQgRgDgNgCQgogHgFAFQgIAHgJAAQgJAAgDAAQgEAGAIAEIAAAAAgeAKQgBAFgDAFQAcAIAagFQABAAACAAQAQgFAIgSQgEAJgJAOQgJAOgVADQgTADgMgFQgMgEgBgJQAAgKAKgFgAA1gfQgBAPgEALIgBAF");
	this.shape_59.setTransform(-2.9,2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.5,1,1).p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(-7.7,0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C49162").s().p("AgbAmQgMgEgBgJQAAgKAKgFIgEAKQAcAIAagFIADAAQAQgFAIgSQgEAJgJAOQgJAOgVADIgNABQgLAAgHgDgAgvgVIAAAAQgIgEAEgGIAMAAQAJAAAIgHQAFgFAoAHIAeAFIgmgBQgdAGgNAAIgTAFg");
	this.shape_61.setTransform(-2.9,2.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#402424").s().p("AglAXIAEgJQAIgQgEgFQgCgCgSgIIASgFQANAAAdgGIAnABQgBAPgEALIgCADQgHAUgQAEIgDABQgKACgIAAQgSAAgSgGg");
	this.shape_62.setTransform(-2.6,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAvgIQgLgZgdACQghAEgMgBQgBAAgBAAQgCgBgBAAQgBABgBAAQgFgDgCgFQAAgBAAgBQAAgBgBgBIABAAIAXAEIAQgJQAaAAAUAPQAGAFAEAIQADAEABAFIADAFQADAHABAMIAAAJQgQAKgYAFQgWAFgMABQgMABAAgFQgDgMALgIQgBAFgCAFQATgVA+AF");
	this.shape_63.setTransform(-3.6,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_64.setTransform(-8,-1.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C49162").s().p("AghAqQgCgMALgIIgDAKQATgVA+AFIAAAJQgQAKgYAFQgWAFgMABIgDAAQgJAAgBgEgAAHgfQghAEgMgBIgDAAIgCgBIgCABQgFgDgCgFIgBgCIAAgCIABAAIAXAEIAPgJQAaAAAVAPQAGAFAEAIIAEAJQgLgZgdACg");
	this.shape_65.setTransform(-3.6,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#402424").s().p("AgfAXQAEgPgDgPQgDgSgNgDQANABAhgDQAdgDALAZIACAFQADAHACANQg/gFgTAUIAEgJg");
	this.shape_66.setTransform(-2.9,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgwAUIAAgKQACgMgMgJQgBAAgBgBQAEgGAvgBQAJgBAbADQAeADAEAD");
	this.shape_67.setTransform(-1.7,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABCgNQgEgEgZgGQgUgFgLgCQgUgEgHgCQgNAIgTADQgGAAgGABQAEAFAFAFQABABABAAABCgNIghAIIgrAMQgXAFgIALQgBABAAAAIAAAAIAAgHQgBABgBAAQgDAFAAAHQADANAOgLQAKgHAWACQAKAAAWgSQAbgUAFgCg");
	this.shape_68.setTransform(-2.2,1.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C49162").s().p("AgvAeQAAgHAEgFIABgBIAAAHIAAAAIABgBQAIgLAXgFIArgMIAhgIQgFACgbAUQgWASgKAAQgWgCgKAHQgGAFgEAAQgFAAgCgHgAAggUQgbgCgJAAQgvABgEAHIACABIgDgBIgJgKIAMgBQATgDANgIQAHACAUAEIAfAHQAZAGAEAEQgEgEgegDg");
	this.shape_69.setTransform(-2.2,1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#402424").s().p("AgvAQIgBACIAAgBIAAgKQACgNgMgIIgCgBQAFgGAugBQAJgBAbADQAeADAEADIgSAEIgPAFIgqALQgXAFgJALIgBABg");
	this.shape_70.setTransform(-1.7,1.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgRgbQAdAEAXADIAAAAIgDAHQgDAFgEAFQAAABAAAAQAAAAgBABQAAABgHAGQgBABgBABQgBABgCACQgHAEgQAEAgDAcQAFgGAHgFQAEgEAEgFQAEgGAEgEAAfgUQgZgCgogB");
	this.shape_71.setTransform(3.2,1.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAwAPQgQADgXACQgVAGgLgHIAAAAIgGACIgBAJQACAGAGADQABAAACABQAPABAMgBQAIAAALgEQALgEAIgDQAIgDADgCAAagaQgogBgdAHIAAAAIAAAAQgGAAgCgDQgEgDgBgKQAdAMAegQQAJAGAfAE");
	this.shape_72.setTransform(-3,1.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgVQgCAAgCAAQgWAEgVADQgXACgXACIgoACIgGgJIAAAAAgPAFQACgCABgCQAMgLAXgBQADgBAEABIAfAIQgRADgWACQgSACgTABgAgyAWIgCgOIAhgCQACgBACAA");
	this.shape_73.setTransform(-0.3,1.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C49162").s().p("AgnAoIgDgCQgGgDgCgFIABgJIAGgCIAAAAQALAHAXgGIAmgEQARgEAIgEIADgDIABgCIAIgIIABgBIgIALIgIAJIgOALIgLAEIgTAHQgJAEgIAAIgOAAIgPAAgAg/gTIAAgBQgFAAgDgDQgEgDgBgKQAdAMAggQQAJAGAdAEIA2AHIgEAAQgZgCgqgBQgogBgcAIIgBgBIABABg");
	this.shape_74.setTransform(-1,1.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9B3141").s().p("AgiAFQANgLAVgCIAHAAIAfAIQgRADgVADIglADIADgEg");
	this.shape_75.setTransform(1.9,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgvAWIgBgBIgCgOIAhgCIAEAAIAlgDQAWgCARgEIAAABIgBABIgIAHIgBACIgEADQgHAEgSAEIgmAEQgLADgIAAQgJAAgFgDgAhDgRQAcgIAoABQAqABAZACIgsAGIgtAEIgoACg");
	this.shape_76.setTransform(-0.5,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#402424").s().p("AhCgBIAngCIAugFIAsgGIAEAAIAAAAIgDAIIgHAIIgfgGIgHAAQgVABgNALIgDAEIgFABIggACg");
	this.shape_77.setTransform(0,0.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA4gVQhagFghALIABAAQgBAAAAAAQgGgEgCgFIAAgBQABAAAAgBQAKgCAJACQAMgHAMgDQAbAEAUADQAWADASAFQABABAAAAQAFACADADQABAAABABQAEADAFAEQABACgEACQgBABgDACQgFAAgKAEQgKADgOADQgwAOgngGQAAgDAAgCQgPAHAMAMQAHACAGABQAjAFAegJQAhgJASgWABDgOQAFADADACQAAABABAB");
	this.shape_78.setTransform(-0.6,1.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.5,1,1).p("AA5gJIh3AIABBACIiBAI");
	this.shape_79.setTransform(0.2,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.5,1,1).p("AADAOQAAAAAAgBQAAgEABgDAAFgGQgFgBgEgG");
	this.shape_80.setTransform(-6.7,1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C49162").s().p("AgsAjIgMgDQgNgMAQgHIgBAFQAnAGAwgOIAYgGIAPgEQgRAWgiAJQgUAGgUAAQgMAAgNgCgAg/gPQgHgEgCgFIAAgBIACgBQAJgCAJACQAMgHANgDIAuAHQAWADATAFQhagFghALg");
	this.shape_81.setTransform(-0.9,1.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag8AUIAAgFIAAgBIABgIICBgHIgEABIgPAGIgYAGQghAKgdAAQgNAAgMgCgAhFgNIAAAAQAggLBaAFIABABIAJAFIh4AHQgGgBgGgGg");
	this.shape_82.setTransform(-0.3,1.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#402424").s().p("AhAgBIB4gIIACABIAIAHQABABAAAAQAAAAgBAAQAAAAgBAAQAAABgBABIiCAIQAFgHgDgEgABCgBIAAAAgAA6gIIAHAGIABABIgIgHg");
	this.shape_83.setTransform(0.4,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABOgYQgCgBgUgBQgagCgXgEQgRgBgUgEIgPAIQgFACgWgIQgEAAgCADQgCACACAJQACAGAHAFIgJgMQAZAJAcgLIBaAEQALgDADAAABMgVIgRASQgWAUgTADQgSADgWgBQgNgBgWgCIgCgHQgHACAEAKIAEAGIAAABQAGAFAIABIAgABQAIABAQgCQAYgBAJgFQADgCAYgoIAFgJIADgD");
	this.shape_84.setTransform(-0.7,1.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(0.5,1,1).p("ABIgPIADgCIgBAAIAAAAAhKgEQAAAAAAABIACACIAEAAIAygBQAkgCAUAAQAEAAATgKAA2ACIh4AHIADAJ");
	this.shape_85.setTransform(-0.3,0.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C49162").s().p("AgMAmIgggBQgIgBgGgFIAAgBIgEgGQgEgKAHgCIACAHIAjADQAWABASgDQATgDAWgUIARgSIAEgCIgDADIgFAJQgYAogDACQgJAFgYABIgQABIgIAAgAhOgVQgCgJACgCQACgDAEAAQAWAIAFgCIAPgIQAUAEARABQAXAEAaACQAUABACABIABABIgOADIhagEQgcALgZgJIAJAMQgHgFgCgGg");
	this.shape_86.setTransform(-0.7,1.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgPAXIgjgCIgCgIIgDgJIB5gFQgWAUgUACQgNACgPAAIgLAAgAg8gGIgDgCIAAgBIgIgMQAZAJAcgKIBaADQgSAKgFAAIg3ACIgzABg");
	this.shape_87.setTransform(-1.4,1.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#402424").s().p("AhHABIAygBIA3AAQAFAAASgJIAOgDIABAAIgEACIgRAQIh4AHIgCgMg");
	this.shape_88.setTransform(0.1,0.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BE8552").ss(0.5,1,1).p("AhDgTQgLgBAAgSIAaAIQATgGAGgIQAMABAUACQAXABAOAFQAOAFAQAGQgYgIgtABQgwADgWAJgABJgYQABABABAAABLgXQABABABAAQAEANgFAJQgLAagZAJQgYAJgQgBQgQAAgQACQgRACACgJQABgJABADQA2ABAngNQAWgIAGgM");
	this.shape_89.setTransform(-0.5,1.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.5,1,1).p("ABEgcIABABABGgbIABABAAugZQANAAAOgBAAugCQAEgNAAAAQgBgDgDgHAAugCQANAAANgBAgyAdQAAgPAAgHIAEgCQANgBAMgBQgLgEgNgPQgFABgIACIgOgKAgtgQQAmgHA1gCAgVADQAbgDAogC");
	this.shape_90.setTransform(-0.1,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C49162").s().p("AguAmQACgJAAADQA2ABAngNQAWgIAGgMQgLAagZAJQgYAJgRgBQgPAAgQACIgFAAQgLAAABgHgAhNgmIAaAIQATgGAHgIIAfADQAXABAOAFIAeALQgYgIgtABQgwADgWAJQgLgBAAgSg");
	this.shape_91.setTransform(-0.7,1.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgyAgIgBgWIAFgCIAZgCIBDgGIAaAAQgGAMgXAIQgjAMgxAAIgJAAgAhIgTQAWgKAygCQArgCAYAJIACAAIABABIABAAIACABIgbABQg1ABgmAHIgNAEg");
	this.shape_92.setTransform(-0.1,1.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#402424").s().p("AhBgCIAMgEQANANALAGIgZACIgEACQgCgOgFgFgAAqgFIgEgKIAbgBQADANgEAIIgaACIAEgMg");
	this.shape_93.setTransform(0.7,1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9B3141").s().p("AgvgEQAngHA1gCIADAKIgEALIhCAGQgLgFgOgNg");
	this.shape_94.setTransform(0.1,0.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA8gWIAJAJQAHAGAEAHIgDAAIgGAGIgHAGQgOAJgJAEIgCAAQgHADgIABQgTABg5ABQgDARAPgCQAQgCAXAEQATADAYgNQAQgIAMgQIAHgKIABgCIACgCIAAAAIAAgBIAAAAIAAABIAAAAAhHgXQgGgEgCgLIAAgBQABgBACABIAFAAIALADQAAABAAgBQAGgCAEgFQACgDAEgBIABgBIABAAIBDAKQATADAQANIgCgBQgHgEgJgBQhEgHgrAMIgBAA");
	this.shape_95.setTransform(-1.5,0.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.5,1,1).p("AA2gPIAPABABGADIgGAAQgDgIgHgKQg4gDgrAHAhFgaIAFAHQADAFACAGQAKgCAEgBAg0AbIAAgNQAGgFAWgDQgRgHgEgKABAADQg7AAgdAD");
	this.shape_96.setTransform(-1.4,0.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C49162").s().p("AgCAwQgWgEgQACQgPACADgRIBMgCQAIgBAHgDIACAAQAJgEANgJIAHgGIAHgGIACAAIAAgBIABAAIAAABIgBAAIAAAAIAAAAIgBACIgBACIgIAKQgMAQgPAIQgUALgRAAIgHgBgAA6gXQgIgEgIgBQhEgHgqAMIgCAAIgBAAQgFgEgDgLIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAFAAIAKADQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFgCAFgFQACgDADgBIABgBIABAAIBCAKQAUADAQANg");
	this.shape_97.setTransform(-1.5,0.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag4ARQAFgEAXgDQAcgDA8AAIAFAAIgHAGQgNAJgJAEIgEAAQgTADhFACgABAgKIgPgBQg4gDgqAHIgOADIgFgLIgFgHQAqgMBEAHQAIABAIAEIACABIAJAJQAGAGAEAGIgCABQgEgHgEgEg");
	this.shape_98.setTransform(-1,0.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#402424").s().p("AhEgHIAPgCQAEAJAQAIQgWACgGAFQAJgPgQgHgAA3AFQgEgJgGgKIAPABQADAEAEAJIgGAFgABFAAIAAABIgCABg");
	this.shape_99.setTransform(-0.5,0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9B3141").s().p("Ag2gFQAqgIA4ADQAHAKAEAJQg6AAgeADQgRgKgEgHg");
	this.shape_100.setTransform(-0.5,0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BE8552").ss(0.5,1,1).p("Ag8gMQgGgEgBgHQgBgIADgEIAUAEQAGgEAEgCQAFgEAFAAQANgBAQAHQAVAHADABQAGABAWAIQAMAEAAABQgEASgLAQQgPAVgSgBQgSgBgUACQgbACgHgJQgEgFACgGIATAAQANACANgBQANgCAHAAQAYgCAJgJQAIgIAFgFQAEgGAGgFIgRgEIgCAAIgBAAQgHgDgHgBQgJgBgGgBQgmgGgoAQg");
	this.shape_101.setTransform(-2.5,1.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.5,1,1).p("AA2gIIgXADIgDAAIgTADQgfACgIADIgSAGIgFgM");
	this.shape_102.setTransform(-3.2,0.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C49162").s().p("Ag0AjQgEgFACgGIATAAQANACANgBIAUgCQAYgCAJgJQAIgIAFgFIAKgLIgRgEIgCAAIADAAQAEgBABAAQACAAgBAAQAAAAgDAAQgDAAgEABQgHgDgHgBIgPgCQgmgGgoAQQgGgEgBgHQgBgIADgEIAUAEIAKgGQAFgEAFAAQANgBAQAHIAYAIQAGABAWAIIAMAFQgEASgLAQQgPAVgSgBQgSgBgUACIgKAAQgSAAgGgHg");
	this.shape_103.setTransform(-2.5,1.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Ag1AAQAogQAmAHIAPACQAHABAHACIgXADIgDAAIgTABQgfAEgIADIgSAFg");
	this.shape_104.setTransform(-3.2,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#402424").s().p("Ag8AUQACgEAAgHQAAgHgCgEIASgFQAHgDAhgEIASgDIADAAIAWgDIACAAIABABIARADIgJALQgFAFgJAIIgCgKQgBgJgEgGIgCAAIgBAAIgeAGQgdADgLADIgBAAIAAABIACAZg");
	this.shape_105.setTransform(-2,1.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9B3141").s().p("AgmATIgCgZIAAAAIABAAQALgDAcgEIAegGIACAAIACABQAEAFABAJIACALQgJAJgYACIgTACIgLAAIgQgBg");
	this.shape_106.setTransform(-2.2,1.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAvgTIAAAAQgBAAgBAAQABAAABAAgAgdgRQgNgEgCgIQgDgIACAAIABAAIAQACIARgDQAXAMAhAHQgigEgfgEQgPgBAGALQACACABACQALANgBAKQgBAFgBAEQAEgFAJgBQAJgBAPAGQAJAEAIgQQAGgIAFgRAgQAKIgIAGQgBAMAJAHQADACADACQAKACAHgGQAKgIANgDIAGgS");
	this.shape_107.setTransform(-3.8,1.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C49162").s().p("AgJAnIgGgEQgJgHABgMIAIgGIgCAJQAEgFAJgBQAJgBAPAGQAJAEAIgQIgGASQgNADgKAIQgGAEgGAAIgFAAgAgrgdQgDgIACAAIABAAIAQACIARgDQAXAMAhAHIhBgIQgPgBAGALQgNgEgCgIg");
	this.shape_108.setTransform(-3.9,1.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#402424").s().p("AgYAPQABgMgKgLIgDgEQgGgMAOABIBBAIIACABIgCgBIACABIAAAAQgFAPgFAKQgJAPgJgDQgNgGgLABQgJABgEAFIACgJg");
	this.shape_109.setTransform(-3,1.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgkgUQgDAAgBAAQgBgBgCgCQgCgBgCgIIAUAAIAAAAIAIgJQAhABAhAfIAAAAQgMgGgBgBQgYgHgOgDQgRgEgPAKIAFAAQAUABAGAVQACAJgGAFQgFADgEADQgCABgBACQAAANAKAEQABAAABAAQAIgDADgCQAFgEAGgCQAMgGAHgGQAHgGADgFQACgEABgBQAAgCACgDQgBACgDAAQgZAPgNAAQgHAAgHABAAvgJQACADgCAE");
	this.shape_110.setTransform(-2.8,1.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C49162").s().p("AgLAqQgKgEABgNIACgDIAKgGIAOgBQANAAAYgPIAFgCIgDAFIgDAGQgCAEgHAGQgIAGgLAGIgMAGIgKAFIgDAAgAAigPQgXgIgPgDQgRgEgPAKIgDAAIgDgCQgCgCgDgIIAVAAIAAAAIAIgJQAgABAhAfIAAAAIgNgGg");
	this.shape_111.setTransform(-2.8,1.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#402424").s().p("AgLAIQgGgVgUgBIgFAAQAPgKARAEQAPADAXAHIANAHQADADgCACIgFAEQgYAPgNAAIgOABQAFgFgCgJg");
	this.shape_112.setTransform(-2.2,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgrgNQgFAAgBgDQgCgFgBgFIAOABIAPgJQAKAFAJACQAIADATAFQASAEALAQQABABAAABQgOAOgJAAQgJAAgEABQgEABgEABQgJABgHAFQgDADgDACQgDACgEABQgFADgFgEQgCgCgBgCQgDgFABgGQAAgCABgDQAMgGAfgCQAigCAKAAAgiANQAOgNgPgHQgHgDgBgDQgBgDAJgCQAPgDAgAGQAgAHAIAJ");
	this.shape_113.setTransform(-3.3,0.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C49162").s().p("AgeAhIgDgEQgDgFABgGIABgFQAMgGAggCIArgCQgOAOgJAAIgMABIgIACQgKABgHAFIgGAFIgHADIgEABQgDAAgDgCgAAMgPQgggGgPADQgJACABADQgFAAgBgDQgCgFgBgFIAOABIAPgJIATAHIAbAIQASAEALAQQgIgJgggHg");
	this.shape_114.setTransform(-3.3,0.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#402424").s().p("AgogDQgGgEgBgCQgBgEAIgCQAPgDAhAHQAgAGAHAKIABACIgrACQgfABgNAHQAOgOgPgGg");
	this.shape_115.setTransform(-2.9,0.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgkgVQgFABgCgFQgCgGAAgHQADABADAAQAHADAIABIAJgJIAsAKQAIABAIACQACAMgDAJQAAAAAAgBQgFAXgMAJQgMAJgDACQgDADgIAEQgDACgGAAQgCAAgCgBQgBAAgCgCQgFgEgBgGQgCgKAGgJQAAgIAAgLQAAgJgTgEQAigEAvgEAgRALQABAGAAADQAMAKAWgTQAYgRACgCIAAAA");
	this.shape_116.setTransform(-4,2.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C49162").s().p("AgHArIgEgBIgDgCQgFgEgBgGQgCgKAGgJIABAJQAMAKAWgTIAZgTIABAAIAAgBQgFAXgMAJIgQALIgLAHQgCACgEAAIgCAAgAgqgZQgCgGAAgHQACABADAAQAIADAIABIAIgJIAtAKIAPADQguAEgjAEIgBAAQgEAAgBgEg");
	this.shape_117.setTransform(-4,2.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#402424").s().p("AgUAYIgBgKIAAgTQAAgJgUgEQAjgEAugEQADAMgDAJIAAABIgaASQgOANgKAAQgGAAgEgDg");
	this.shape_118.setTransform(-3.6,2.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA0gIQgGgGgIgFQgGgFgIgEQgLgDgKgEQgEgDgGgDIgPAKIgdgFQACAGADACQAEACAFADQAFADABACAA0gIQAAADgCABIAAABQgYAWgoAFQADgGABgFAAygEQgUAfgFAEQgHAFgCACIgUAEQgMAAgHgFQgCgCAAgCQAAgCAAgCQgBgGACgCQABgCACgDQABgBAKgCQAEgSgZgNIAFgGQAugFAgAV");
	this.shape_119.setTransform(-4.2,2.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C49162").s().p("AgXAlQgCgCAAgCIAAgEQgBgGACgCIADgEQABgCAKgCQgBAFgDAGQAogFAYgWIAAgBQgUAfgFAEIgJAHIgUAEQgMAAgHgFgAgagYIgFAGIgGgFIgJgFQgDgCgCgGIAdAFIAPgKIAKAGIAVAHQAIAEAGAFQAIAFAGAGQgggVguAFg");
	this.shape_120.setTransform(-4.2,2.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#402424").s().p("AgUAOQAEgSgZgNIAFgGQAugFAgAVIgDAEIAAABQgXAWgpAFQAEgGABgFg");
	this.shape_121.setTransform(-3.1,2.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BE8552").ss(0.5,1,1).p("AACgDQgCADgBAE");
	this.shape_122.setTransform(-4.9,4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAngLQgFgFgGgEQgFgEgEgDQgGgEgGgDQgHgDgIgDQgDACgCABQgEACgEACQgBACgCACIgQAAIAAABQAEAGAHAEQACACAJAAAAngLQAEASgGAIQgEAHgIAEQgXAPgQgBQgJgBAAgCQgCgSAQgHQAJgSgSgKQgFgDgHgCQASgFAQAAQARAAASAPgAgPAVQAFgCAXgBQAZgBABgc");
	this.shape_123.setTransform(-3.5,2.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C49162").s().p("AgOAoQgJgBAAgCQgCgSAQgHIgGAJQAFgCAXgBQAZgBABgcQAEASgGAIQgEAHgIAEQgWAPgQAAIgBgBgAAEgaQgQAAgSAFIAMAFQgJAAgCgCQgHgEgEgGIAAgBIAQAAIADgEIAIgEIAFgDIAPAGIAMAHIAJAHIALAJQgSgPgRAAg");
	this.shape_124.setTransform(-3.5,2.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#402424").s().p("AgNAPQAJgSgSgKIgMgFQASgFAQAAQARAAASAPQgBAcgZABQgXABgFACIAGgJg");
	this.shape_125.setTransform(-3.1,2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BE8552").ss(1,1,1).p("ABGgWQgRACgRADQgJAAgTAAQgQABgUgDQgKABgCAHQgNgCgNgHQgIAMANAGABGgWQgSAMgHAFQgHAEgTAIQgSAKgXAEQgZAFgKgHQgKgIAGgNQAAACAdAAQAdAAAZgHQAMgDALgEg");
	this.shape_126.setTransform(-1.2,1.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C9996D").s().p("Ag5ATQgKgIAGgNIAAAAIAAAAQABACAaAAIABAAIABAAIAAAAIABAAQAbAAAWgFIACgBIACgBIAXgHIAZgIIgZARIgaAMQgSAKgXAEIgRACQgMAAgGgEgAgiAAQgaAAgBgCIAAAAIAAAAQgNgGAIgMQANAHANACQACgHAKgBQAUADAQgBIAcAAQAJgBAAAEIgXAHIgCABIgCABQgWAFgbAAIgBAAIAAAAIgBAAIgBAAg");
	this.shape_127.setTransform(-1.2,1.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BE8552").ss(1,1,1).p("Ag4gCQgVgMAFgIQARAGAQACQABABANgCQAJgDAGgCQAGgCAYAHQAaAHgDgBQgCgBAhADQgYAKgGADQgGACgZAIQgYAHgRgBQgQAAgKgHQgKgGAIgLQgCACAhAAQAfgBAVgDQAKgBAlgC");
	this.shape_128.setTransform(-1.3,2.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C9996D").s().p("AgcAWQgQAAgKgHQgKgGAIgLIAAAAQAAACAOAAIABAAIAAAAIAQAAQAfgBAVgDIAvgDIgeANQgGACgZAIQgWAHgQAAIgDgBgAgqAAQgOAAAAgCIAAAAQgVgMAFgIQARAGAQACIAOgBIAPgFQAGgCAYAHIAXAGQgCgBAhADIgvADQgVADgfABIgQAAIAAAAIgBAAgABKgHIAAAAg");
	this.shape_129.setTransform(-1.3,2.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BE8552").ss(1,1,1).p("AgyAEQgIgHgCgJQAMAFAGgCIAPgKQAugKAqAOQgkAYgfAJQgMAEgHABQgEAAgGAAQgHACgHgBQgKgHAFgHgAA9gPQg8AAgyASQgBAAAAAB");
	this.shape_130.setTransform(-2.1,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C49162").s().p("AgxAYQgJgHAEgHIAEgGIABgBQAxgSA9AAQgkAYgfAJQgMAEgHABIgKAAIgKABIgEAAgAg8gMQANAFAFgCIAPgKQAugKAqAOQg9AAgxASIgBABQgIgHgCgJgAA9gPIAAAAg");
	this.shape_131.setTransform(-2.1,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAugEIAAAAIAAABIAAAAIAAgBQgrgEgRgBQgUAAgEgBQgEgBgBgDQgBgEgBgHIAOAIIANgIQAXAPARABQAQABAIAEgAAcATQgBABgBAAQgCABAGgDQgPAEgJgEQgIgFgHgEQgMgFgGgBQgGAAgCADQgDABgBAEQAAAFAAAFQABACAAABQACADACgBQABAAABgBQAAgBABAAQACgBACAAQAIAAAHAAQAJABAJACQAKACAMgJQABAAABgBAAugDQgHARgLAF");
	this.shape_132.setTransform(-3.7,0.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.5,1,1).p("AArgDIgBABQgZALgdABAgqgJIAEAQ");
	this.shape_133.setTransform(-3.4,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C49162").s().p("AglAYIgBgDIAAgKQAAgEADgBQACgDAHAAQAFABAMAFIAQAJQAIAEAQgEIgFACIACgBQgMAIgKgBIgRgDIgQAAIgDABIgCABIgBABIgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgAgOgJQgTAAgFgBQgDgBgBgDIgDgLIAOAIIANgIQAYAPAQABQAQABAIAEQgqgEgSgBg");
	this.shape_134.setTransform(-3.7,0.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgeAEQgGAAgCADIgEgQQAFABAUAAQARABAqAEIAAABIAAgBIABAAIgBABQgZALgdABQgMgFgGgBg");
	this.shape_135.setTransform(-3.4,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#402424").s().p("AAMAKIgCACIgCAAIAAAAIAEgCgAgJAKIgSgIQAegCAZgLIAAAAIAAAAIAAAAIAAAAQgHARgLAGIACgCQgHACgFAAQgFAAgEgCg");
	this.shape_136.setTransform(-1.9,0.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgtgIIAAAAQgEgCgCgFQgCgEgCgCQAEADAFABQACAAACAAQACABACgBQABAAABgBQAIgGAKABQACAAADABQANAGAOABQAFAAAEAAQADABAQAAIAEABQgCAAgBAAQgFAAgEAAQgVABgTACQghACgEAAQgBAAgBAAAAoAEQABgBACgBQAHgCAGgKQgDgBgDgBQgDgBgEAAAAoAEQgXANgHACQgIADgGABQgHABgHAAQgKABgKgDQgNgCAIgOQAYgFASAAQABAAAAAAQAFABATADQAJACAHgDg");
	this.shape_137.setTransform(-2.5,0.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(0.5,1,1).p("AguAKQAAgGgBgIIAAgBIAAAAIAAAAIAAAAIAAAAAAwgJQghAJgBAAQgNAEgCAA");
	this.shape_138.setTransform(-2.3,0.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C49162").s().p("AgiAWQgMgCAIgOQAYgFAQAAIACAAIAZAEQAJACAHgDQgXANgHACQgIADgHABIgNABIgFAAQgHAAgJgCgAgmgIIgBAAIgBAAIAAAAIAAAAQgEgCgCgFIgEgGQAEADAFABIAEAAIAEAAIABgBQAJgGAJABIAFABQAMAGAPABIAKAAIATABIAEABIgEAAIgIAAIgoADIglACIAAAAg");
	this.shape_139.setTransform(-3,0.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgvgEIAAAAIAAAAIAAAAIACAAIAlgCIAogDIAIAAIAIABIgiAJIgPAEIgCAAQgTAAgYAFIgBgOg");
	this.shape_140.setTransform(-2.3,0.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#402424").s().p("AgCAJIgZgEIARgFIAggIIAGACQgGAIgHAEIgDABQgFACgFAAIgEAAg");
	this.shape_141.setTransform(0.2,0.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAxgKQAKACAAAJQhBgFghAMQgCABgDABQgOAJAQAFQAIAAAHgBQAIgBAHgCQAIgDAHgDQAIgDAHgCQAFgBAFAAQACAAAdgHAAxgKIhPgNQgMAOgJgFIgHAAIAAAAQgDAKASADQACgNBaAEg");
	this.shape_142.setTransform(-2.7,-0.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(0.5,1,1).p("AACAFIgDgJ");
	this.shape_143.setTransform(-7,-0.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C49162").s().p("AgsAKIAFgCQAhgMBBAFIgeAHIgKABIgQAEIgPAHQgHACgIAAIgOACQgRgFAOgJgAg5gOIgBAAIAIAAQAIAFAMgOIBPANQhagEgCANQgSgDAEgKg");
	this.shape_144.setTransform(-2.7,-0.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgzAAQADgMBZAEQALADgBAIQhAgFghAMg");
	this.shape_145.setTransform(-2,-1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BE8552").ss(1,1,1).p("Ag1AEQgBAEAcgCQAagBAagLQALgGAKgFQANgHALgGQgYAGgDAAQgcAJgcgJQgCAAgBABQgGAFgHAFQgLADgBAAQgOgBgPgFQAAAAgBAAIAAABQgDAJAUAKgABHgeQgRASgVANQgGAFgGAEQgaARgQADQgBABgBAAQgJABgHgCQgFgBgFgCQgJgHAFgQ");
	this.shape_146.setTransform(-2.4,1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C49162").s().p("AgnAeQgFgBgFgCQgJgHAFgQIAAAAQAAADANAAIAAAAIABAAIABAAIAKAAIACgBQAagBAagLIAVgLIAYgNQgRASgVANIgMAJQgaARgQADIgCABIgIAAIgIgBgAgoAHQgNAAAAgDIAAAAQgUgKADgJIABgBQAPAFAOABIAMgDIANgKIADgBQAcAJAcgJIAbgGIgYANIgVALQgaALgaABIgCABIgKAAIgBAAIgBAAIAAAAgABHgeIAAAAg");
	this.shape_147.setTransform(-2.4,1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BE8552").ss(1,1,1).p("ABHgZQgLAHgLABQgPABgRABQAAAAgBAAQgfgFgDABQgDACgOAEQgDAAgDgBQgKgCgLgGQgEgCgEgCQgBANAMAKQgEAPAFAHQAGAGAIgBQACAAABAAQAGgBACAAQADABAHACQAIADAUgGQAHgBAFgDQAOgEAKgIQAOgIAQgYQgVAPgVAGQgGACgGACQgRACgSABQgMABgLgCQgJgCgJgD");
	this.shape_148.setTransform(-2.8,2.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C49162").s().p("AgXAaIgKgDIgIABIgDAAQgIABgGgGQgFgHAEgPQgMgKABgNIAIAEQALAGAKACIAGABIARgGQADgBAfAFIABAAIAggCQALgBALgHQgVAPgVAGIgMAEQgRACgSABIgJAAIAAAAIAAAAIgGAAIgCAAIgFgBIgBAAQgJgCgJgDQAJADAJACIABAAIAFABIACAAIAGAAIAAAAIAAAAIAJAAQASgBARgCIAMgEQAVgGAVgPQgQAYgOAIQgKAIgOAEIgMAEQgNAEgJAAIgGgBg");
	this.shape_149.setTransform(-2.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},2).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-4.1,17.5,12.1);


(lib.glaptop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFUmIIAAAAIgBAAIs+gIAlDGHIjFsKINQABIDBMT");
	this.shape.setTransform(52.2,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADCmIIAAAAIAAAAIC8MBQCRgeCMgUIAAAPIj8ArIAAAAIgUAIIgUAIItJAAIgDgKAC2mCIALgGIABAAAF+F5IANAQAp9mQIgdAN");
	this.shape_1.setTransform(66.8,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7F7").s().p("AF3GRIjBsTIALgGIgLAGItQgBIAdgNIM+AIIABAAIC8MBQCRgeCMgUIAAAPIj7ArIAAAAIgVAIIgNgQIANAQIgUAIgAnSGRIgDgKIjFsKINQABIDBMTgAGLGJgAC2mCg");
	this.shape_2.setTransform(66.8,40.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,135.5,82.4);


(lib.gdesk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APHsIIAACuIAAVEIAAAZAKci/IgBigIAAiKIAAkYAP0MAIAAgWIAAuMIAApmAKbh6IAANWIAAAtAvzMGIAAgqIAAwZIAAnEAvzMJIAAgDIAxgZIAAgR");
	this.shape.setTransform(132.9,89.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("APztCMgiGAAAQgRAAgNASQgMASAAAaQAAAKACAKQADAMAHALQANASARAAIA7AAIDXAAIaOAAIDXAAIAPAAQAFAAAEgCQAFgBADgDIA1AAIAtAAIAtAAIAUAAQAKgFAGgFQAVgUgogeIijg1gAQErNQAGgFAGgHQAHgLADgMQACgKAAgKQAAgagMgSQgHgJgIgFQgCgBgDgBQgEgCgFAAAMOiEIgBBEAMNNDIDXAAIAAyMIAAl+ARmM6IACAAIArgDIAAxxIAAmTAQ5M9IhQAGARmMkIgtAAAxYBsQAAijAAilQAAj1AAj2AxYLoIAABbIDXAAAMNMWI5dAAIgxAAAxYBsIAAJ8AxYBsQgTEzATFJ");
	this.shape_1.setTransform(121.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B5F5B").s().p("AQ8hyIAAiuIAACuQhMAQgJDFIAAl8IAAF8Qgsj8hIgkQgtBfgZB1QgMgMgRgMIAAkYIAAEYQgVgRgcgTQi+h+qThFQqUhFh4HWIAAnCIAAHCQgLlGhUhHQhhC4gXD8IAAnpIDXAAIaOAAIDXAAIAOAAQAFgBAFgBIAIgFIA1AAIAtAAIAtAAIAAGSQglAwgICiIAApkIAAJkQgNkWggiggAMQCHIAMgEQgKBOgCBWgAt+CpgAP1kZIgOAAIjXAAI6OAAIjXAAIg7AAQgRgBgNgSQgHgKgDgNMAjVAAAICcAZQgFAGgKAEIgUAAIgtAAIgtAAIg1AAQAGgEAFgIQAIgKADgNQgDANgIAKQgFAIgGAEIgIAFQgFABgFABgASWkggAQHkgg");
	this.shape_2.setTransform(121.2,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F827F").s().p("APkNDIAAyMIAASMIjXAAIAAgtIAAtWIAANWI5dAAIgxAAIAAwZIAAQZIAAAqIAAADIjXAAIAAhbIAAp8IAAJ8QgTlJATkzQgNivANiZQAXj9Bhi5QBUBHALFIQB4nYKVBGQKSBFC+B+QAcATAVARQARAOAMAMQAZh3AthgQBIAlAsD9QAJjGBMgRQAgCiANEWQAJihAkgxIAARxIgrADIgCAAIAAgWIAAuMIAAOMIgtAAIAA1EIAAVEIAAAZIhQAGgAxYBsIAAlIIAAFIgAMNhAIABhEQAChXAJhOIgMAFIAAiKIAACKIABCggAuBMWIAxAAIAAARIgxAZgAQarwQACgKAAgKQAAgagMgSQgHgJgIgFICjA1QAoAegVAUgAy7rwQgCgKAAgKQAAgaAMgSQANgSARAAMAiGAAAIAOAEQAIAFAHAJQAMASAAAaQAAAKgCAKg");
	this.shape_3.setTransform(121.5,83.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,245,169.1);


(lib.gchair = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlxhSQDhnGiCmdQA1hQBUgPQF8hKGOBlQA4gBAlBMQkTIIDdFUArTCdQAUgGAUgHQCTg1CiihIAAAAIAAAAArTCdQAUADAUACQIgBMIlhbQC9guBZirQAAAAAAAAQAAAAAAAAQAiAmgjArIAAM1IgqAtIg3AAIAAscIA3gnIAqgfArTDUIBVAAIAoAAIAAMvIgoAyIhVAAIAAthQgTgcATgbAmJDUIA3AAIAZAAIAAJ8IgZAhIg3gBIAAqcIjNAAAGaDUIhkAAIpvAAAGaDUIAogdIAANaIgoAkIhkAAIAAthAGaCTQAZAggZAhIAANhAJOBRIiMBmAKFAqIAANDAlSDUIAAKdAp+DUIAANh");
	this.shape.setTransform(73.4,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AINgEQADAEADAFIwlAAIAAAAQADgFACgE");
	this.shape_1.setTransform(89,102.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AFIIUIAAtfIBlAAIAogdIAANZIgoAjIAAtfIAANfgArBIUIAAtfIBVAAIAoAAIAAMuIgoAxIAAtfIAANfgAl3FQIAAqbIA3AAIAZAAIAAJ7IgZAgIAAqbIAAKbgAKYFMgAJhFMIAAsZIA3goIAqgeIAAMyIgqAtIAAtBIAANBg");
	this.shape_2.setTransform(71.6,165.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#15212D").s().p("AGaKEIAAAAgAE2KEIpvAAIgZAAIg3AAIjNAAIgoAAIhVAAQgTgbATgcQAUgFAUgHQCTg2CiiiIAAAAIAAAAIAAAAIAFgMIQZAAIAHAMIwlAAIQlAAIABAAIAAAAQAiAmgjAtIgqAeIg3AoIiMBlIgoAdQAMgQAAgQQAAgRgMgQQC9guBZisQhZCsi9AuQAMAQAAARQAAAQgMAQgAi9J1QEfAAEiguIAMgCIAKgCIgKACIgMACQkiAukfAAIAAAAIAAAAQjxAAjwggIgNgCIgogGIAoAGIANACQDwAgDxAAIAAAAIAAAAgAlxFdQDhnFiCmcQA1hRBUgPQF8hKGOBlQA4gBAlBNQkTIGDdFUg");
	this.shape_3.setTransform(73.4,67.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,2,148.9,217.4);


(lib.UseWhatYouLearned = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ThreeCorrect");
	}
	this.frame_100 = function() {
		/* stop();
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(1));

	// actions
	this.text = new cjs.Text("\nYou got three right in a\n row! Congratulations!", "16px 'Helvetica'", "#282415");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 175;
	this.text.setTransform(121.9,-37.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00C5E9").ss(2.1,1,1).p("ABfhfQABCugBARQgBABi8i5");
	this.shape.setTransform(128.1,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#17ADCD").ss(2.1,1,1).p("AheADQC+gEgBgB");
	this.shape_1.setTransform(128.1,54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C5E9").s().p("AhehYQC9gGAAgBIAAC/IAAAAQgCAAi7i4gABfhfIAAAAIAAAAg");
	this.shape_2.setTransform(128.1,63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B9DB").ss(2.5,1,1).p("AtWnMQAwhSMfAPQEuAGEHATQEGATAkARQAjASANCUQALB7gFC8QgECUgLCaQgKCegIAYQgHAXhCALQgBAA4oAAQgTAEgXgIQgtgQgSg5QgLghgKiNQgJiGgCiFQgDiaAMh4QAOiNAhg4g");
	this.shape_3.setTransform(125.4,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},100).wait(1));

	// table
	this.instance = new lib.gdesk("synched",0);
	this.instance.setTransform(121.5,336.5,1,1,0,0,0,121.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// laptop
	this.instance_1 = new lib.glaptop("synched",0);
	this.instance_1.setTransform(96.9,218.1,0.992,1.015,0,7.1,0,66.8,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// jane eyes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("ABPgKQgBgBgCgBQgBgBgBgBQgDgBgCgBABCgFQgCAAgDgBQgIgCgGgEABjgIQgFgDgFABAhOAOQgBgBAAAAIgBgBQgDgCgDgBQgBAAAAgBQgCgBgDgBAhTARIAAAAQgCAAgCAAQgIAAgDgFAhCAOQgEgEgEgDAA6ACIAAAAQgNACgIgI");
	this.shape_4.setTransform(135.9,124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ABnADQgLgPgMgFQgCgBgCgBQgBAAgCgBQgCAAgBAAQgFgBgEABQgDABgCABQgFABgDACQgFAEgDAFAhDAVIAAAAQgEgIgEgEQgCgCgCgBIgBAAQgBgBgBAAQgBAAgBgBQgFgBgEABQgCAAgBAAQgEABgBADIAAAA");
	this.shape_5.setTransform(137.7,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8F6910").ss(1,1,1).p("AAGgJQAfgNAQgEQACAAACAAQAGgBAFAAQAWgBAUALQARAKAPAHAiNAcQAQgbAaAC");
	this.shape_6.setTransform(138.2,118);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKgRQAKAFALAPIgUAQQALgOgMgWg");
	this.shape_7.setTransform(146.9,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474B70").s().p("AhaAbIgDgKIgBgIQgBgIACgCIAAAAQACgCADgBIAEgBQAEgBAEACIACAAIACABIABAAIAEADQAEACAFAIIgBABIgDAIIgHAJIAAAAIgFADIgEABQgFAAgHgFgABHAPIgMgBIgCgBQgGgIgDgHQgDgIADgGIAAgBQADgFAFgDIAIgEIAFgCIAJAAIADABIAEAAIAEACQAOAZgOALIgBACIgDACIgBAAIAAAAQgEADgIAAIgBAAg");
	this.shape_8.setTransform(136.9,126);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,1,1).p("ABCACQgFAAgEgCQgCAAgCgDABJAAQgDgBgBgCQgCgFAAgDABZgDQgDgDAAgDQAAgCAAgDABpgDQABgGgBgDAB/AHQgCgFAAgDAhoAIQgGgFgDgDQgDgBAAgDAhaACQgBgCgCgBQgBAAgBgBQgBgBgBgCAhJAAQgCAAgBgBQgCgFAAgFAhyAPQgGgCgDgDQgEgDABgE");
	this.shape_9.setTransform(144.4,122.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAtgBIAGgGIACgCIAFgDIACgBQAHgBAHAAQADgBADAAQAFAAAFABQAIACAIAFQADABADADQAGADAFADQAFAGACAHAiBAFQgBgBABgBQABgCAJgCQADgCAEgCQABgBACAAIAEgBIARgCIAFAAQAEACAFAEQAFADADAH");
	this.shape_10.setTransform(145.9,123.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8F6910").ss(1,1,1).p("ACQAVQgYgVgUgKQgegOgjAFAiPAWQAJgQAPgHQATgLAXAB");
	this.shape_11.setTransform(145.3,115);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah2AVIgBgEQgFgFgDgLIgCgGQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgCAJgEIAHgEIADgBQgIAPAFAPIACAKIgIgBgAA6ALQgMgFAAgTIAFgGIACgCQgBATAMAPIgGgCgABrgPIAMAIQAHAGAEAFQgNADgJAAQADgHgEgPg");
	this.shape_12.setTransform(145.9,125.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#474B70").s().p("AhtAPQgFgPAIgPIAEgBIARgCIAFAAQAEACAFAEQAFAEADAIQAEAHgGAIIgCAGIgoAEIgCgKgABLASIgIgCQgMgQABgSIAFgDIACgBIAOgBIAGgBIAKABQAIACAIAFIABAEQAEAPgEAHIAAABIgEAEQgPAEgJAAIgHgBg");
	this.shape_13.setTransform(145.6,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_5}]},14).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},18).wait(69));

	// jane mouth
	this.instance_2 = new lib.gjanemouthside("single",0);
	this.instance_2.setTransform(140.3,145.4,1,0.6,0,0,0,-1.2,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BE8552").ss(1,1,1).p("Ag7ARQgZgHACgKIAAAAQAAAAABAAQATABAQgBQABAAANgEQAHgHAHgGQABAAACgBQAjAEAggPQADgBAdgKQgTAVgWATQgHADgGAGQgeAWgRAGQgBABgBAAQgKADgJAAQgHAAgFgCQgMgFADgRgABUgoQgNAIgOAJQgMAIgMAHQgdAQgfAHQggAHAAgF");
	this.shape_14.setTransform(148.2,143.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C49162").s().p("AgyAnQgMgFADgRQgZgHACgKIABAAQATABAQgBQABAAANgEIAOgNIADgBQAjAEAggPIAggLIgbARIgYAPQgdAQgfAHIgBAAIgDABIgCAAIgBAAIgCABIgBAAIgEAAIgEABIgEABIgCAAIgDAAIAAAAQgFAAAAgCIAAAAIAAAAQAAACAFAAIAAAAIADAAIACAAIAEgBIAEgBIAEAAIABAAIACgBIABAAIACAAIADgBIABAAQAfgHAdgQIAYgPIAbgRQgTAVgWATIgNAJQgeAWgRAGIgCABQgKADgJAAIgMgCgABUgoIAAAAg");
	this.shape_15.setTransform(148.2,143.9);

	this.text_1 = new cjs.Text("", "16px '_sans'", "#282415");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(362.1,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance_2},{t:this.text_1}]},10).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1,x:141.4,y:145.1},0).wait(3).to({regX:-1,scaleX:0.93,scaleY:0.9,x:141.3},0).wait(4).to({regX:-1.2,scaleX:0.86,scaleY:0.7,x:141,y:145.2},0).wait(1).to({scaleX:0.84,scaleY:0.78,x:140.9},0).wait(1).to({scaleX:0.82,scaleY:0.85,x:140.8},0).wait(1).to({regX:-1.1,scaleX:0.8,scaleY:0.93,x:140.7},0).wait(1).to({regX:-1.2,scaleX:0.79,scaleY:1,x:140.6,startPosition:20},0).wait(2).to({scaleX:1,x:142.2},0).wait(4).to({rotation:-4.5,x:141.7,y:145.1},0).wait(6).to({scaleY:0.73,rotation:-2.3,x:140.6,y:145.3},0).wait(2).to({scaleY:0.6,rotation:0,x:140.3,y:145.4},0).wait(4).to({scaleY:1,rotation:-7,x:141.5,y:145.1},0).wait(2).to({regX:-1.1,regY:2.1,scaleX:1.32,scaleY:0.93,rotation:0,skewX:8.5,skewY:3.1,x:147.2,y:145.8,startPosition:29},0).wait(2).to({scaleX:1.01,scaleY:1,skewX:0,skewY:0,x:146.1,y:145.7,startPosition:20},0).wait(2).to({scaleX:1.32,scaleY:0.93,skewX:8.5,skewY:3.1,x:147.2,y:145.8,startPosition:29},0).wait(4).to({scaleX:0.96,x:146.6,y:145.3,startPosition:1},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(4).to({regX:-1.2,regY:1.9,scaleX:1.02,scaleY:0.87,skewX:0,skewY:0,x:147.5,y:145.4,startPosition:12},0).wait(7).to({startPosition:12},0).wait(3).to({regX:-1.1,regY:2.1,scaleX:1.32,scaleY:0.93,skewX:8.5,skewY:3.1,x:147.2,y:145.8,startPosition:29},0).wait(6).to({scaleX:0.96,x:146.6,y:145.3,startPosition:1},0).wait(5).to({scaleX:1.01,scaleY:0.93,skewX:0,skewY:0,x:146.1,y:145.7,startPosition:24},0).wait(2).to({scaleY:1},0).wait(4).to({startPosition:20},0).wait(8).to({scaleX:1.32,scaleY:0.93,skewX:8.5,skewY:3.1,x:147.2,y:145.8,startPosition:29},0).to({_off:true},1).wait(10).to({_off:false,regX:-1.2,regY:2,scaleX:1,scaleY:1.14,rotation:-7,skewX:0,skewY:0,x:147.5,y:144.2,startPosition:37},0).wait(4));

	// jane
	this.instance_3 = new lib.gjanemouthside("single",45);
	this.instance_3.setTransform(141.8,145.4,1,1,0,0,0,-1.2,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AFlhQQgSgSgWgRQgEgEgWgEQAHgEAFgFQAKgKAHgMQAnADAUAGQASAFASADQgYghgVgjQgHgMgGgMQgGgLgEgMQgDgHgCgHQgIgYABgaQAAgNAEgLQABgDABgCQAJgPAFgQQANglACglQAFg2gEg3QgGg8gQg7QgNgugYgqQgHgMgGgLQgOgVgSgSQgBgBgBgBQgWgXgcgRQgegTglgHQgHgCgGAAQgBAAAAAAIgBAAQAAAAgBAAQgMgBgNADQgSADgSAIQgQgGgfAAQgYAAgoAGIgBAAQgIABgJABQgmAOgqAmQgJAIgHALQgBABAAABQgBAAAAAAIAAABQgcAogKBMQgHAuAKAsQAAAAAAABIAAABIAAAAQALAwAeAsQgEgeAKg6QAAgFABgFQACgMACgKQgOALgRAKQgEACgFABQAegeALgMIAEgDQAAgBAAAAQABgBABAAIAAAAQAAgBABAAIAAgBQAHgWAKgNQAKgNAOgEQgBACgCABQgRAagVAXADUoaQANghARgDQADgBAEACQALAEAJAXQAMAfgLAdQgIAXgMANQgEADgDADADJopQACAGACAHQAAABAAAAQABABABACQACAIABAIQACAKACAKQAAAAABABQAFAOAFAOQAEAMAEALQABADABADIAAAAQAFAVAGAWQAAAAABABQABAGACAHIAAABQAAAAAAABQAAABAAACQAHAaADAaQACAYABAXACHpvQASAeAOAeIABAAQAAABAAABQACAEACAFQABAAAAABQAAABABABIAAABIAAAAQAAABABAAQAAACACACQAKAaAJAYQADAJADAIQAHAVAFAUIABAAQADANAEAMQACAIACAIIAAAAQACAHACAHIAAABQAEAQAEAQQAHAiAIAjQACAMADAMAFthLIBaAuQAUAKAPAIQAWAGArA/QARAYAMAhIA5BTIgRAFQAAAFAAAEQADBRgOA9QgEAOgEAMIgGA5QgBAUgBAIIgBAFQgBACAAACADcl5QgBADAAADQgCAGAAAHIAAAAQgCAJAAAKQABAIABAJQADASAFARQAGARAIAWIAAAAQAEAMAEAOQAHATAIAXQAMAnALAVIAAAAIAAABIAAABQAIANAMAAIAFAUQgCADgDADQgGAKgIAKQgSAYgVAUIAAABQAAAAAAAAIgBABQgBAAAAAAQAAAAAAABQgKAJgKAGQAAABAAAAQAAAQACAOQAAABAAAAIAAAAQACgBADAAQAKAYAJAVQAYA3AYAeQAGAIAFAHQAUAXAZALIAAAAQACABADABQgCgBgBgCQAAgBAAgBQgMg2gEg3IAAAAQgBgXAAgWQABhAAShAQABgCAAgBAFshIIgEgEQgBgBgCgCIAAAAIAAgBIAIAFAI6F4QADgMADgLQALgyAAg2QgBgQgBgRQgBgGAAgHIAoAAAJIBzIhYASAJIDLIg5AAIgfhGIACAtAAIrMQAHAQAJAPQABABAAACQADAFADAEQABACABABQALARAOAOQAWAWAYAVQAXAVAZAUIABABQACACADACQgCgDgBgCIAAgBIAAgBQgFgKgGgJQgMgQgKgRQgCgCgCgDAgkriQAFAfAMAcQAFANAGAMQABABABABQAAABABABIAAABIABABQAJAVAQAVQAEAFANAPQABABAAAAQAFAGAFAGQgEgHgDgGIAAgBIAAAAQgPgigKgkQgBgCgBgDQAAgCAAgCQgCgGgBgHQgBgCAAgCQgDgRAAgQIgCgEQgBgCAAgBIAAAAIAAgBQgFgLgDgLAharCQAEgIAEgJAiLp1QAIgFAGgGQABgCACgBQACgBABgBQAegfAZglQAGgKAFgLAiVn6IAAAAQAAgCgBgBAiUn7IgBABIACACQAAACABACIABAAQADAQAHAXQADAMADAPQAAABAAAAQgIAcABAdIACAjQAIAcAUAZQAVAZAZAWQAGAFAFAGQABAAABAAIABABQAIAHACAQIAAABQABALAQALQAIAFALAGQAAAAAAABQAUAJAUgEQADgBAEgBQACAAACgBQAJgEAKgIQAAAAACgBQAHgGAGgFQAHAoABAbQAAAHAAAGQAAAFAAAEQgKAFgJADQgCACgCADQgDAHgDAGQgCADgCAEAgbmoQgDAGgDAFQAAABAAAAIAAABQgVApgLADQgLAZAfAHQABAAAAAAQAGACAJABADRlfQABgEAAgDIAAgBQABgGABgHQABgJAAgJABVjBQABgBABAAQAOgMAMgJQAIgGAHgFQAEgDADgDQAUgQAZgeQAAAAABgBQAOgRAIgbQACgJACgJQAAAAABgBQAAgEABgDAApgJQACgCABgCQAEgGAEgFIAAAAQAHgKAHgIQAGgNAOgSQABgBAAgCQABgDABgEQABgDAAgEIAAgBQAAgBABAAQABgFABgHAgNh9QASATAYALQALADALgBQACAAACAAQAKgBAJgCAA5hPQgHAKgHAJQgYAdgYAcQgDACgBABQgFAVgFAWQAAADgBACQgFAWgBAXIATgNIABAAIAAgBIAOgLIAOgeIgMAcIgCACIgkBSIgqBbIgGAMIgUA7QgEAPAAAQQAAAaAMAYIAKAQIAcAwQAAABABAAQADAJAFAIQADAGAJATQABACACACQABAggEAfIgVgDIgfgFABBhbQgBACgCADAA+gRQAMgBASALADzgXQgJABgJACQAAAAgBABQgBAAgBAAQgTAFgTAIQgKAFgHAGAgxjmQAAAAABABIAAABQADAMABALQAAAAAAABQACALAAAMQgBAPgCAPQgBACAAACQgIAdgPAbQgBADgCACQgDAEgDAEAhChSQAZgOATgUQACgCACgCAgTArQgBACgBACIAAABQgpBNgIB0AgGBQIgWBGADoAjQACAhABAVQAAAQACASQABAMABANQADAlAGAmQAJA/AQA+IARA+IAAAAIACAGADoAjQgLADgIACQgXAHgIADQg9AXgdB0QAAhbgHgcQgCgLgDgKQgMgogbgSIgTAvAgJAAIAfAmAgTIHIADAJIAGAWIADANIAAABQABADABAEQAFAkAFAlQABAGABAGQgGgCgFgCQgGgCgIgCQgJgCgJgEQgCAAAAgDQAAgVAEgVQADgPACgPAgTIHIAAAAAhOGZIgRCUIAOACIAAABQgNBHgIA8QjXAmk9ClIgBABQgCABgDABAAHKQQABAJABAKQABACAAACQABANABAOQADAtAAAuIFIg2IARhJAgaH4IAHAPAALNPIgCAAIl1AAIBhgoIDpgIIAxgCAAKNWIgBAAQAAAAABgBQAAgBAAABIAAABQgBAFgBAFQABgHAAgDIqBAtAALNPIgBAHIAAAAAALNPIgBAGAI6F4IAjAEAHyC0IAFCkIAAAXIBDAJAFsJoQgJgUgHgUQgDgEAAgEQgTgtgPgtQgBgEgBgDIgRg3IgCgFAFyJ3QgDgHgDgIAIAJhQgUgCgUgCQgcgEgdgSQgKgHgRgPIgSBGIgKAnQABgXADgfAGEIxQgIgGgHgHQAIguAGgsQAPh9gKhmAJSHfQgEATgGAYQgIAhgBAQQgCAQgDAWQgJABgIAAAICJhQADAAADAAQAQABARAAQgHAkgNAiQgDAIgZBAIgWBfInYAA");
	this.shape_16.setTransform(137.9,171.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A4211E").s().p("AA/goQg4gXhcgPQg9gHgDA5IgFAAIgCgJIgBAAIgHgQIgCgEIgNgYIgIgRIgBgBIgcgwIgJgRQAsAVA7gNQAQgLAPgQQASAfA2AQQB2AhA1grIACAFIARA4IACAGQAPAuATArIADAIIAQAoQgDAeAAAYIgSBIQgth8hhhkg");
	this.shape_17.setTransform(151.6,227.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3CFA4").s().p("Aj2JbIgCAAIAAgHIGsghIAAgDQA1hsAUhXIACAAIAGAAIAhABQgHAkgNAiIgbBIIgXBfgAkGGaIAMACIACATIABAEIACAbQAEAtAAAuIg0ACgAirm1IgOALIgCABQgJAIgKAEIgEABIgCgDIAhggIACgCQBHhAA1hKIADACIgEASQgIAbgOARIgBABQgZAegTAQIgIAGIgPALIgaAVIgBABIABAAIAAgBIAagVIAPgLIAIgGQATgQAZgeIABgBQAOgRAIgbIAEgSIABgBIABgHIAAgCIABgHIAHAAIAAAAIgBATIABARIgEABQggB0goAlIgsAoIgEACQgBgbgGgogAgypJg");
	this.shape_18.setTransform(163.7,196.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AnPK8IABAAIACAEgAHNDYIABgBIACAGgACUiRIAAAAIACABgADqkSIAAgHIADgFIAFAAIgHAOgAB6moIgBgBIACABIAAAAIgBABgAB1nlIAAgBIABABgAAVq9IgBgCIACACIgBAAg");
	this.shape_19.setTransform(120.7,191.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D82C27").s().p("AhrE5IgCgcIgBgEIgCgTIgBgMQgFglgIgkIgCgHIAAgBIgDgMIgBgWQADg6A9AIQBcAPA4AXQBhBlAtB9IlFA3QAAgugEgtgAgCAbQg2gRgSgcQgPAPgQAKQg7AMgsgTQgNgXAAgaQAAgPAEgQIAUg6IAGgNIAqhbIAmhSIADgBIALgcIATgyQAbAUAMApIAFAUQAHAdAABaQAbh0A9gXIAfgJIATgGIADA2IACAiIACAZQADAlAGAmQAJBAAQA9IASA8IAAAAIgBABQgeAYg0AAQgnAAgygOg");
	this.shape_20.setTransform(149.9,211.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#76782D").s().p("AkiFFIgOgFIgTgFQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAgVAEgUIAFgfQACgYAAgZIAAgOIAIAPIADAJIAFAXIAEAMIAAABIABAHQAIAkAFAlIACAMIgNgDgABOEhIgRgpIgDgHQgSgugPgtIgDgGIgQg4IgCgGIAAAAIAMgIQAqAzAqAFQgFAsgJAuQBDAoBrgHIACgBQAXgcAXhIIgKAqQgJAhgBARIgFAlIgRABIgggBIgHAAIgBAAIgpgEQgcgDgcgTIgcgVIgPgOIAPAOIgRBFIgGgOgAlRDsIABgFIAVg7IACAEIAAAOQAAAZgCAYgABlDqIAAAAgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA2gMAwIAIACIAdAAIgHAagADTiSIAAgCIgBgtIAfBGIA4AAIABANIgBgNIApAAIAAAJIgoAEIg2AGgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA3AVAfIAMAOIgGAIQgngbgWgmgAkykVIABgGIAJgtIAhApIgNAdIgRALIAAABIAAAAIgTAOQABgYAFgVg");
	this.shape_21.setTransform(166.5,204.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9FA156").s().p("ABkE/QAIguAGgsQgqgFgqgzIgMAIIgSg+QgNg+gKg9QgGgmgDglIgCgZIAKgBQAWAmAnAbIAGgIQAUAXAYALIAAAAIAFACIgDgDIAAgCQgLg2gEg3IAAAAIgCgiIABgLQAAhCAThAIABgDIBaAuIAjASQAVAGArBBQASAYALAhIA5BTIgQAFIgpAAIg4AAIgghGIBYgSIhYASIACAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgGBKgWAVIg4AAIgFiiIAFCiIAAAXIBDAJIAjAEIgFA5IgDAcIgBAFIgBAEIAAADIgBACQgWBJgYAbIgBACIgfABQhWAAg5gigAByDlQAJhMAAhEQAAgrgDgoQADAoAAArQAABEgJBMgAliFKIgOgCIARiUIAcAwIABABIAIARIANAZIgWA7IAAAFgAkmizIACAAQgGAWgBAXIATgNIABAAIgVBGIgrBZQAIhyAphNgABXgOIAAAAQgYgLgUgXIgMgPQgXgegWg3IgTgtIgHgfIATgRIABgBIAAAAIABgBIAAAAIAAgBQATgUATgYIAOgUIAFgGIgFgUQgNAAgHgNIAAgBIAAgBIAGgDQAVAEAEAEQAXARARASIAAABIABAAIACADIAFAEQgTBAAABCIgBALIACAiIAAAAQAEA3ALA2IAAACIADADIgFgCgADfhegAkajlIAEgDQAagcAYgdIAOgTIAFAAIACABIgEAHIAEgHIAHgNIADgFQAJgDAKgFIgCAMIAAABIAAABIgCAHIgBAHIgBADQgPASgFANQgIAIgHAKIAAAAIgIALIgCAEIgUAxgABcktg");
	this.shape_22.setTransform(165.1,194.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEE3BC").s().p("Ao8MuQE8ilDYgmQAIg8AMhIIAAAAIAdAFIAWADIgGAeQgDAVAAAVQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIATAGIAOAEIAMAEIgMgCIgfCRIjnAIIhgAoIF0AAIAAAHIqAAtgABGL/gAkuL/IBggoIDngIIA0gCIFHg3IAShIIAJgoIAShFIAbAWQAdASAcADIAoAFQgUBXg1BsIAAADImuAgIAAAIgACTgIIgGgVQgMgogagUIACgEIAIgMIAAAAQAHgJAIgIQAFgOAPgRIABgEIABgGIACgHIAAgBIAAgCIACgMIABgIIAAgNIADgCIAtgoQAoglAfh1IAEAAQADASAGARIANAmIABABIAIAZIAOArQANAnAKAVIABAAIAAAAIAAACQAHANANgBIAFAVIgFAGIgOATQgTAYgVAVIAAAAIAAABIgBAAIAAABIgBAAIgTASIgBABIACAeIAAABIgSAFIggAKQg8AXgeByQAAhbgGgagAEehkIgBABIgBAAQgUAEgSAJQgLAFgGAIQAGgIALgFQASgJAUgEIABAAIABgBIASgDIgSADgACZhXIgBgBIgCgBQgOgIgKAAIgCgBIAAAAIAAAAIgBABIABgBIAAAAIAAAAIACABQAKAAAOAIIACABIABABIAAAAgAA9j7IgBgBIgTgLQgRgLgBgLIAAgBQgBgQgJgIIAAAAIgCgBIgLgKQgYgWgVgZQgTgZgIgcIgDgjQgBgdAJgcIAAgBIgHgcIgKgmIAAAAIgCgEIgBgCIABgBIgDgCQgDgeAJg6IABgKIAFgWIANgLIADgEIADgCQAfgeAYglQAFgLAEgLIARgDQAFAfANAcIALAZIABABIABADIAAABIABABQAMAVAQAUIAQAVIACABIAKAMIgHgNIgBgBIAAgBQgPghgKgkIgBgGIgBgDIgDgNIgBgEQgDgRAAgRQAIAQAIAQIACADIAGAJIACADQAKARAPAOQAVAVAYAVIAwAqIABAAIAFAFIARADIACAEIAUAyIAFARIANAoIAAABIAHAZIAEAQIAAAAIgMADIgCASIgBAOIAAABIgCAHIAAACIgBAHIgBABIgCgCQg2BKhHBAIgBABIgiAhIACADIgHACIgMABQgNAAgPgGgAAHlzIABAAIgBgBgAAOmfIACAAIAPADIgPgDIgCAAQgVgGAAgPQAAgFADgGQAKgDAUgqIAAAAIABgBIAGgLIgGALIgBABIAAAAQgUAqgKADQgDAGAAAFQAAAPAVAGgACVkTIAAABIgCABIACgCgAEmoQIgIgXIgKgdIAAgBIgEgTIgEgRIAFgBQAOghAQgDQAEgBAEABQAKAEAJAYQANAfgLAdQgJAWgMAOIgHAFIgIADIgCgGg");
	this.shape_23.setTransform(131.7,179.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B66616").s().p("Ai0GTIADgEQAOgbAIgeIABgEQADgPABgPIgCgXIAAgBIgEgXIABgBQAJAHACARIAAAAQABALAQAMIATALIACAAQAUAKATgEIAIgCIAEgCQAJgEAKgHIABgBIAOgLQAHAoABAaIAAAOIgBAIQgJAFgJADQgKADgJAAIgEABQgMAAgLgCQgXgMgUgTIgFAGIgEAEQgUATgZAOgACwFyQgKgVgNgnIgOgrIgIgZIgBgBIgNgmQgGgRgCgSIgCgSIABgSIAAgBIACgMIABgGIgBAGIgCAMIgGAAIAAAAIABgOIACgSIANgDIAAgBIgFgPIgHgZIAAgBIgNgoIgFgPIgUgyIgBgEIgBAAIAAgBIAAgBIgBAAIgBgCIAAgCIgEgJIgBgBIAAgBQgOgegSgdQASAdAOAeIAAABIABABIAEAJIAAACIABACIABAAIAAABIAAABIgRgDIgCgGIAAgBIgBAAQgFgLgGgIIgWghIgDgFIADAFIAWAhQAGAIAFALIABAAIAAABIACAGIgFgFIgBAAIgugqQgYgVgVgWQgPgOgKgQIgCgDIgGgJIgCgEQgIgPgHgQQAAARADAQIAAAFIADANIABADIACAGQAJAjAPAiIAAABIgCACIgBgBIgRgVQgQgUgMgWIAAgBIgCgDIgBgBIgLgZQgNgcgFgfIgQADQgFALgHALQgYAlgfAeIgCACIgDADIgOAMQgOALgRAJIgJAEIApgqIADgEIABAAIgBAAIgDAEIgpAqIAJgEQARgJAOgLIgEAWIgCAKQgJA6AEAeQgfgtgKgvIAAgBIgBAAIAAgCQgJgrAGguQALhNAcgoIAAAAIAAgBIABgBQAIgLAJgIQApgnAngNIARgDIABAAQAogGAaAAQAfAAAQAHQASgJARgDQALgCANABIABAAIAAAAIABAAIAOABQAkAHAeATQAdASAWAXIACABQARATAOAVIAOAWQAYAqANAvQAQA6AGA9QAEA2gFA0QgDAmgMAkQgGAQgIAPIgCAFQgFAMAAAMQgBAaAJAZIAEANQAFAMAGAMQAFAMAHALQAWAjAYAiQgTgEgSgFQgTgFgngDQgIALgJALIgMAJIgGADgAB5BvIAIAfIAQBFIAFAYIgFgYIgQhFIgIgfIAAgBIgDgOIADAOIAAABgACNBpIABABIAAAEQAGAZADAaIAEAwIgEgwQgDgagGgZIAAgEIgBgBIAAAAIgDgOIAAgBIgMgqIAAgBIAJgCIAGgGQAMgNAJgXQALgbgMgeQgJgYgLgEQgEgBgEABQgQACgOAiIgFABIgBgCIAAgBIgEgOIAEAOIAAABIABACIAEARIAEATIAAABIALAbIAHAXIACAFIAAABIAMAqIAAABIADAOIAAAAgAjyifIABABIAAgDIgBACgAjwihIAAgBIAAAAQAVgXASgaIACgDIAJgRIgJARQgNADgKANQgKANgIAXIAAAAIAAABIgBAAIABAAgAhmjoIABABIABACIACAEIgCgEIgBgCIgBgBIAAAAIgJgWIAJAWIAAAAgAiWlCIADgCIgBgBgAh7lzIADgCIgCgBgAB+AvIAAAAg");
	this.shape_24.setTransform(148.7,122.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AFkhQQgRgSgXgRQgDgEgWgEQAHgEAFgFQAKgKAHgMQAnADATAFQATAGASADQgYghgVgjQgHgMgGgMQgGgLgEgMQgDgHgCgHQgJgYABgaQABgNAEgMQABgCABgCQAJgPAFgRQANgkADglQAFg2gFg3QgGg8gQg7QgNgugYgqQgGgMgIgLQgOgVgRgSQgBgBgBgBQgWgXgdgSQgdgSglgHQgHgCgGAAQgBAAgBAAIAAAAQAAAAgBAAQgNgBgNADQgRADgSAIQgPgGggAAQgYAAgoAFIgBAAQgIACgJABQgmAOgqAmQgJAIgHALQgBABAAAAQgBABAAAAIAAAAQgbApgLBMQgHAuAJArQAAABABABQAAAAAAAAIAAABQALAwAeAsQgEgeAKg6QAAgFABgFQACgMADgKQgPALgRAJQgEADgFABQAegeALgMIADgEQABAAAAAAQABgBABgBQAAAAAAgBIABAAADUoaQANghAQgDQAEgBAEACQALAEAJAXQAMAfgLAcQgIAXgNANQgDAEgDACADJoqQACAHACAHQAAABABAAQAAABAAABQADAJABAIQACAKACAKQAAAAAAAAQAGAPAFAOQAEAMAEALQABADABADIAAAAQAGAVAFAWQAAAAAAAAQACAHACAHIAAAAQAAABAAABQAAABABACQAGAaADAaQACAYABAXADcl5QgBADgBADQgBAGAAAHIAAAAQgCAJABAJQAAAJABAJQACASAHARQAFARAIAVQAAABAAAAQAEAMAEANQAHAUAHAXQANAnALAVIAAAAIAAAAQAAABAAAAQAHAOAOAAIAEAUQgCADgCADQgHAKgIAJQgSAYgVAVIAAAAQAAABgBAAIAAAAQAAABgBAAQAAAAAAAAQgKAKgKAGQAAABAAAAQABAQABAOQAAAAAAABIAAAAQACgBADgBQAKAZAJAVQAZA3AWAeQAHAIAGAHQAUAWAXAMIABAAIAAAAQACABADABQgCgCgBgBQAAgBgBgBQgKg2gFg3IAAgBQgBgWAAgXQABg/AShAQABgCAAgCIBbAuQATAKAPAJQAWAGArA/QARAYAMAhIhYASIACAtACHpvQASAeAOAdQAAABAAAAQABABAAAAQACAFACAEQAAABABABQAAABABABIAAAAQAAABAAAAQAAABABAAQAAACABACQALAaAJAYQADAJACAIQAHAVAGATQAAABAAAAQAEANAEAMQACAIACAIIAAAAQACAHACAHIAAABQAEAQAEAQQAHAiAIAiQACANADAMAFthMIgJgEIAAAAQABABAAAAQACACABABIAEAEADoAjQACAhABAVQAAAQACARQAAANACAMQADAmAGAmQAJA/APA+IASA9IAAABIACAGAJwDLIgpAAQABAHABAGQABARAAAQQABA2gLAyQgDALgEALIAkAFIgGA5IAAgBIAAABQgBAUgCAIIAAAEQgBADAAACAJwDLQAAAEAAAFQADBRgPA9QgDAOgEAMAJHDLIg4AAIgfhGAJIBzIA5BTIgRAFAAIrMQAHAPAJAQQABABABACQACAFADAEQABACABABQALAQAOAOQAWAXAXAUQAYAWAYAUQABAAAAABQADACACACQgBgDgBgDQAAAAAAgBIAAAAIAAAAQgFgKgGgJQgMgQgLgRQgBgCgCgDAglriQAGAfAMAcQAFANAHAMQAAABAAABQABABABABQAAAAAAABIABAAQAKAWAPAVQAEAFANAPQABABAAAAQAFAFAFAHQgEgHgDgHQAAAAAAAAIAAAAQgPgigKgkQgBgDAAgCQgBgCAAgCQgCgHgBgGQgBgCAAgDQgDgQAAgQIgCgFQgBgBAAgBQAAAAAAgBQAAAAgBAAQgEgLgCgLAharCQgOAEgKANQgKANgHAWQAVgXARgaQACgBABgCQAEgIAEgJAiKp1QAHgGAGgGQACgBABgBQABgBACgCQAfgeAYglQAGgKAFgMAiWn9QABABAAABQABABAAAAIAAABQABADABACIAAAAQAEAQAGAXQAEAMADAPQAAABAAAAQgIAcAAAcIAEAjQAHAdAUAZQAVAZAZAWQAGAFAGAFQAAABABAAQAAAAAAABQAJAHACAQIAAAAQABAMAQALQAIAFALAGQAAAAAAAAQAUAKAUgEQADgBAEgBQACAAACgBQAJgEAKgIQABAAAAgBQAIgGAGgFQAHAoABAbQAAAHAAAGQAAAFAAAEQgKAFgJACAiUn7IAAABAgbmpQgDAHgCAFQgBABAAAAQAAAAAAABQgUApgMACQgLAZAfAIQABAAAAAAQAHACAIAAADVmHQgBAKAAAJQgBAHgBAGIAAABQgBADAAADADRldQgBADgBAEQAAAAAAABQgCAJgCAJQgIAbgOARQAAAAgBABIAAAAQgZAegUAQQgDADgEACQgHAGgIAGQgMAJgOAMQgBAAgBABAApgJQACgCABgCQAEgGAEgFIAAgBQAHgJAHgIQAFgNAPgSQAAgBABgCQABgDABgEQAAgDACgFIAAAAQAAAAAAAAQAAgBAAAAQABgGABgGABBhbQgBACgCACAgNh9QASASAXAMQAMACALAAQACAAACAAQAKgBAJgDQgCADgBADQgEAHgEAGQgCADgCADAA5hPQgHAJgHAJQgYAegZAbQgBACgDACQgEAVgFAWQgBACAAADQgFAWgBAXIATgNIAAgBAA9gRQANgBARALADzgXQgJABgJACQAAAAgBAAQgBABgBAAQgTAFgTAIQgLAFgGAGAgwjnQAAABAAABIAAAAQADANACAKQAAABAAABQABALAAALQAAAQgEAOQAAADgBACQgHAdgPAbQgBADgCACQgDAEgDAEAhChTQAYgNAUgUQACgCADgCAAIBEIADgCIALgcIgOAeIgkBSIAVhGIAAgBIABAAgAhHDxQAJh0AphOQAAAAAAAAQABgCABgCAgcCWIgrBbIgFAMIgUA6QgEAQAAAQQAAAZANAZIAJAQIgRCUIAOACIAeAFIAWADQAEgfgBggQgMgXgDgGQgFgIgEgJQAAAAAAgBIgcgwADoAjQgLADgIACQgWAHgJADQg9AXgdB0QAAhbgHgdQgCgKgDgKQgMgpgbgRAAWAmIATgvAgKAAIAgAmAgdHzIADAFAgTIHIAAAAIAAAAIAAAAIADAJIAGAWIADANIAAAAQABAEAAAEQAHAkAEAlQABAGABAGQgGgCgEgCQgHgCgHgCQgKgCgJgEQgCAAAAgDQAAgVAEgVQADgPACgPAhRIvIAAAAQgNBIgIA8QjXAmk9ClIAAAAQgDACgDABAAQMdQAAgugEgtQgBgOgBgNQgBgCAAgCQgBgKgBgJAgTIHIgHgPAALNPIgCAAIl1AAIBggoIDqgIIAygCAALNPIgBAHIAAAAQgBAFgBAFQABgHAAgDIABAAIAAAAIAAgBQAAgBgBABQAAAAAAABAALNPIgBAGAp4ODIKBgtAI5F3IhCgIIgBgXIgEikAEhGaIADAGIARA3QABADABAEQAPAtASAtQACAEABAEQAJAUAIAUQADAHADAIIgKAnIgSBIIABABIgBAAIlGA2AGEIxQgHgGgIgHQAIguAFgsQAQh9gKhmAIAJgQgUgBgVgDQgcgDgcgSQgJgHgSgPIgSBGAFsJoQgDAfgBAXAJSHfQgEATgGAYQgIAhgCAQQgBAQgEAWQgIABgJAAAIBJgQAEABADAAQAQABAQAAQgGAkgNAiQgDAIgZBAIgXBfInXAA");
	this.shape_25.setTransform(138.8,171.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A4211E").s().p("AA/goQg4gXhcgPQg9gHgDA5IgFAAIgCgJIgBAAIgHgQIgPgcIgJgRIAAgBIgcgwIgJgRQAsAVA7gNQAQgLAPgQQASAfA2AQQB2AhA0grIADAFIARA4IACAGQAPAuASArIAEAIIAQAoQgDAegBAYIgSBIQgsh8hhhkg");
	this.shape_26.setTransform(152.6,227.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3CFA4").s().p("Aj2JbIgCAAIAAgHIGsghIAAgDQA1hsAUhXIACAAIAGAAIAhABQgHAkgNAiIgbBIIgXBfgAkGGaIAMACIACATIABAEIACAbQAEAtAAAuIg0ACgAirm1IABgBIAAAAIAAAAIgBABIgOALIgCABQgJAIgKAEIgEABIgCgDQARgRAQgQIACgBQBHhAA1hKIADACIABgBIABgHIAAgCIABgHIAHAAIAAAAIgBASIABASIgEABQggB0goAlIgsAoIgEACQgBgbgGgogAg2o3QgIAbgOARIgBABIAAAAQgZAegTAQIgIAGIgPALIgaAVIAagVIAPgLIAIgGQATgQAZgeIAAAAIABgBQAOgRAIgbIAEgSIgEASg");
	this.shape_27.setTransform(164.7,196.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AnxK8IABAAIACAEgAHgIkIAAAAIAAAAgAGrDYIABgBIACAGgAHxASIAAAAIABAAgACBhxIAAAAIAAAAgAByiRIAAAAIACAAgADIkSIAAgHIADgFIAFAAIgHANgABYmoIgBgBIACAAIAAABIgBABgABTnmIABAAIgBABIAAgBgAgLq9IgBgCIACABIgBABIAAAAg");
	this.shape_28.setTransform(125.1,191.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D82C27").s().p("AhqE4IgDgbIAAgEIgDgSIgBgMQgFgmgIgkIgCgHIAAAAIgDgNQgBgMAAgKQADg5A9AHQBdAPA3AXQBhBmAtB8IAAAAIlFA2QAAgtgDgugAgBAbQg2gQgTgdQgOAQgRAIQg7AOgsgUQgNgXAAgaQAAgPAEgQIAUg6IAGgMIAqhcIAmhSIADgBIALgcIAUgyQAaAUANAoIAFAVQAGAdAABbQAbh1A9gWIAfgKIATgFIADA1IACAiIACAZQADAmAGAlQAJBAAQA+IASA7IAAABIgBAAQgeAYg0AAQgnAAgxgOg");
	this.shape_29.setTransform(150.9,211.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#76782D").s().p("AkiFEIgOgDIgTgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgVAEgVIAFgeQADgZAAgZIgBgOIAIAPIAAABIADAJIAFAWIAEANIAAAAIABAHQAIAkAFAmIACALIgNgEgABOEhIgRgpIgDgHQgSgtgPguIgDgHIgQg3IgCgFIAAgBIAMgIQAqA0AqAEQgFAsgJAvQBEAnBqgHIACgBQAXgcAXhJIgKArQgIAhgCAQIgFAnIgRAAIgggBIgHAAIgBAAIgpgEQgcgEgcgSQgKgGgSgPIgPgNIAPANIgRBFIgGgOgAlRDsIABgFIAVg7IACAEIABAOQAAAZgDAZgABlDqIAAAAgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA3gMAvIAIACIAdAAIgHAagADTiRIAAgDIgBgsIAfBGIA4AAIABAMIg2AGgAEqhuIAAAAgAEph6IApAAIAAAIIgoAEIgBgMgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA4AVAeIAMAOIgGAIQgngbgWgmgAkykWIABgFIAJgsIAhAnIgNAeIgRAMIAAAAIAAAAIgTAOQABgYAFgWg");
	this.shape_30.setTransform(167.5,204.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAXAEADAEQAXARARASIAAAAIABABIADADIAEAEQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAAAAIAAAAIAAAAIAFACIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAIABgEIBaAuIAjATQAVAGArBBQASAYALAhIhXASIBXgSIA5BTIgRAFIgoAAIg4AAIgfhGIABAtIAAACIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAE3B9IgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAhAqIA2gGIAogEQADBPgPA9gAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgADhgvgAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxgAjTktIAEgGIgEAGg");
	this.shape_31.setTransform(166.1,194.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEE3BC").s().p("Ao9MuQE9imDYglQAIg8AMhIIAAAAIAdAFIAVADIgEAeQgEAVAAAVQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIATAGIAOAEIAMAEIgMgDIgeCSIjoAIIhgAoIF1AAIAAAHIqBAtgABHL/gAkuL/IBggoIDogIIAzgCIFHg3IAAAAIAAAAIAShIIAKgoIARhFQASAPAKAHQAcASAcADIApAEQgVBYg1BsIAAADImuAgIABAIgACTgJIgFgUQgNgpgagTIACgEIAIgMIAAAAIAPgRQAFgNAPgSIAAgEIACgGIACgIIAAAAIAAAAIAAgCIACgMIABgIIgBgNIAFgCIAsgoQAoglAfh1IAFAAQACASAGARIANAmIAAABIAJAZIAOArQANAnAKAVIAAAAIAAAAIABABQAHAOANgBIAFAVIgFAGIgOATQgSAYgVAVIgBAAIAAABIAAAAIgBABIgBAAIgTASIgBABIACAeIAAABIgTAFIgfAKQg9AWgdBzQAAhbgGgbgAEfhkIgBAAIgCABQgUAEgTAJQgKAFgGAIQAGgIAKgFQATgJAUgEIACgBIABAAIARgDIgRADgACZhXIgDgCQgOgIgLAAIgBgBIAAAAIgBAAIAAABIAAgBIABAAIAAAAIABABQALAAAOAIIADACgAA9j8IgBAAQgLgGgIgFQgRgMgBgLIAAAAQgCgRgIgHIgBAAIgBgBIgLgKQgXgWgVgZQgUgZgIgdIgDgjQgBgdAJgbIAAgBIgHgcIgKgmIAAAAIgCgFIgBgBIABgBIgCgCQgEgeAJg6IACgKIAEgWIAOgMIADgDIACgCQAfgeAYglIAKgWIAQgDQAFAfAMAcIAMAZIABABIABADIABABIAAAAQAMAWAQAUIARAVIABABIAKAMIgIgOIAAAAIAAgBQgPghgJgkIgCgGIgBgDIgDgNIgBgFQgCgQgBgRIAQAgIACADIAFAJIACADQALAQAPAOQAVAXAYAUIAwAqIABAAIAFAFIARADIACAEIATAyIAGARIANAoIAAABIAHAZIAFAQIAAAAIgOADIgBASIgCAOIAAABIgBAGIAAADIgBAHIAAABIgDgCQg1BKhHBAIgCABQgRAPgRASIACADIgHACIgLABQgOAAgPgHgAAHlzIABAAIgBgBIAAABgAAPmfIABAAIAOACIgOgCIgBAAQgWgGAAgPQAAgFADgHQAKgCAUgqIABAAIAAgBIAGgMIgGAMIAAABIgBAAQgUAqgKACQgDAHAAAFQAAAPAWAGgACUkTIABABIAAAAIgCABIABgCgAEmoQIgHgXIgLgdIAAgBIgEgTIgEgRIAFgBQAOghAQgDQAEgBADABQAMAEAJAYQALAfgKAcQgJAXgMANIgHAGIgIADIgCgGg");
	this.shape_32.setTransform(132.7,179.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B66616").s().p("Ai0GUIADgFQAOgbAIgdIABgFQADgOAAgQQAAgLgBgLIAAgCIgFgXIACAAQAIAGACARIAAAAQABALARAMQAIAFALAGIABAAQAUAKAUgEIAHgCIAEgBQAKgFAJgHIACgBIAOgLQAGAoABAbIABANIgBAJQgJAEgKADQgJADgJABIgEAAQgMAAgLgCQgXgMgVgSIgEAFIgEAEQgUATgZAOgACwFyQgKgVgNgnIgOgrIgJgZIAAgBIgNgmQgGgRgCgSIgCgSIABgSIAAAAIACgNIABgGIgBAGIgCANIgHAAIAAgBIACgNIABgTIAOgDIAAAAIgFgQIgHgZIAAgBIgNgoIgGgPIgTgyIgBgEIgBAAIAAgBIgBgBIAAAAIgBgCIAAgCIgFgJIAAgBIgBgBQgNgdgTgeQATAeANAdIABABIAAABIAFAJIAAACIABACIAAAAIABABIAAABIgRgDIgCgGIgBgBIAAAAIAAAAQgFgKgGgJIgWghIgEgFIAEAFIAWAhQAGAJAFAKIAAAAIAAAAIABABIACAGIgFgEIgBgBIgugqQgYgUgVgXQgPgOgLgQIgCgDIgFgJIgCgDIgQgfQABAQACAQIABAFIADANIABAEIACAFQAJAkAPAiIAAAAIgCACIgBgBIgRgUQgQgVgMgWIgBgBIgBgCIgBgCIgMgZQgMgcgFgfIgQADIgMAWQgYAlgfAeIgCADIgDACIgOAMQgPALgQAJQgFADgEABIAogqIAEgEIABAAIABABIABgDIAAgBIAAAAIgBABIgBACIgBAAIgEAEIgoAqQAEgBAFgDQAQgJAPgLIgEAWIgCAKQgJA6AEAeQgfgsgLgwIAAgBIAAAAIAAgCQgJgrAGguQALhMAbgpIABAAIAAgBIABgBQAIgLAIgIQAqgmAngOIARgDIAAAAQAogFAbAAQAfAAAPAGQASgIASgDQALgDANABIABAAIAAAAIABAAIANACQAlAHAeASQAcASAXAXIABACQASASAOAVIAOAXQAYApANAvQAPA7AGA8QAFA3gFA0QgDAlgMAkQgGAQgJAQIgBAEQgFAMAAANQgBAaAIAYIAFAOIAKAXIANAYQAVAjAZAhQgTgEgSgFQgTgFgngDQgIAMgKAKQgFAFgHAEIgGADgAB5BvIAIAgIAPBEIAGAZIgGgZIgPhEIgIggIAAgBIgDgOIADAOIAAABgACNBpIAAACIABADQAGAaADAaQADAXAAAYQAAgYgDgXQgDgagGgaIgBgDIAAgCIAAAAIgDgOIAAAAIgMgrIAAAAIAAAAIAMArIAAAAIADAOIAAAAgABmgcIAEAUIAAAAIALAbIAHAXIACAGIAIgDIAHgGQAMgNAJgXQAKgagLgfQgJgYgMgDQgDgCgEABQgQADgOAhIgFABIgBgCIAAgBIgFgOIAFAOIAAABIABACIAEARgAjejFQgLANgHAWQAVgXASgaIACgDQAFgIADgJQgDAJgFAIQgNADgKAOgAhmjoIAAAAIAAABIABACIACAFIgCgFIgBgCIAAgBIAAAAIgJgWIAJAWgACPlCIABgCIAAAAgAiWlCIADgCIgBgBgAh8lzIAEgBIgCgCgAj3iJIAAAAg");
	this.shape_33.setTransform(149.7,122.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_34.setTransform(138.8,171.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E3CFA4").s().p("Aj2JdIgCAAIAAgIIGsghIAAgCQA1hsAUhYIACAAIAGAAIAhABQgHAlgNAhIgbBIIgXBggAkGGbIAMACIACATIABAEIACAbQAEAuAAAtIg0ACgAiQlWQgEgCgCgFIgEgKIgDgPIgCgKIAHgYIAAgBIAAAAQAegGAcgeQAcgfAUgaQAUgZAHgRIAHgTIgHATQgHARgUAZQgUAagcAfQgcAegeAGQA1gvAVgWQAfghAUgoQANgaALgbIADADIgKAhIAAABIgCAEIgCAHIAEABQgBBWABAEIAEALQgOAfgWAbIgSAWIgFAGQgJALgLAIQgRAOgRAAQgMAAgNgHgAhbm6IABAAIgBAAg");
	this.shape_35.setTransform(164.7,196.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AnxHrIABAAIACAEgAHgFTIAAAAIAAAAgAGrAHIABgBIACAGgAHxi9IAAAAIABAAgACBlCIAAAAIAAAAgAByliIAAAAIACAAgADInjIAAgHIADgFIAFAAIgHANg");
	this.shape_36.setTransform(125.1,212.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#76782D").s().p("AkiFEIgOgDIgTgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgVAEgVIAFgeQADgZAAgZIgBgOIAIAPIAAABIADAJIAFAWIAEANIAAAAIABAHQAIAkAFAmIACALIgNgEgABOEhIgRgpIgDgHQgSgtgPguIgDgHIgQg3IgCgFIAAgBIAMgIQAqA0AqAEQgFAsgJAvIAPANIgPgNQBEAnBqgHIACgBQAXgcAXhJIgKArQgIAhgCAQIgFAnIgRAAIgggBIgHAAIgBAAIgpgEQgcgEgcgSQgKgGgSgPIgRBFIgGgOgAlRDsIABgFIAVg7IACAEIABAOQAAAZgDAZgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA3gMAvIAIACIAdAAIgHAagADTiRIAAgDIgBgsIAfBGIA4AAIABAMIgBgMIApAAIAAAIIgoAEIg2AGgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA4AVAeIAMAOIgGAIQgngbgWgmgAkykWIABgFIAJgsIAhAnIgNAeIgRAMIAAAAIAAAAIgTAOQABgYAFgWg");
	this.shape_37.setTransform(167.5,204.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAUADAFAEIAAAAIABABIAFADIAAAGIAGAAQAQANANANIAAAAIABABIADADIAEAEIABgEIBaAuIAjATQAVAGArBBQASAYALAhIhXASIBXgSIA5BTIgRAFIgoAAIg4AAIgfhGIABAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgABcgMIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAFACgABXgOIAAAAIAAAAgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIgEAGIAEgGIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxg");
	this.shape_38.setTransform(166.1,194.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEE3BC").s().p("Ao9M8QE9imDYglQAIg8AMhIIAAAAIAdAEIAVAEIgEAeQgEAVAAAVQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIATAGIAOADIAMAEIgMgCIgeCRIjoAJIhgAoIF1AAIAAAHIqBAtgABHMNgAkuMNIBggoIDogJIAzgCIFHg2IAAAAIAAAAIAShJIAKgnIARhFQASAPAKAGQAcASAcAEIApAEQgVBYg1BsIAAACImuAhIABAIgACTADIgFgTQgNgogagUIACgEIAIgLIAAAAIAPgSQAFgNAPgRIAAgEIACgHIACgHIAAAAIAAgBIAAgBIACgMIABgJIABgKIABgIIADgKIACAKIADAPIADAKQACAFAEACQAfARAcgXQALgJAJgLIAFgGIASgVQAWgcAOgfIALAgIAJAaIAJAWIAFALIAAABIABABQAHANANAAIAFAVIgFAGIgOATQgSAYgVAVIgBAAIAAABIAAAAIgBABIgBAAIgTASIgBAAIACAeIAAABIgTAGIgfAKQg9AUgdB0QAAhagGgdgAEfhWIgBAAIgCAAQgUAFgTAJQgKAEgGAIQAGgIAKgEQATgJAUgFIACAAIABAAIARgEIgRAEgACZhKIgDgBQgOgIgLgBIgBAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIABAAQALABAOAIIADABgACLjoIgGgBIACAAIAQABIABAAIAAAAIAMAAIgOABIgLgBgACXjoIgQgBIgCAAQgogEgTgcQgSgdgqgnICVAAIiVgCIgNgQIgIgOIgBgBIgIgRQgRglACgrIACguIAAAAIAAgBIABgTIAAAAIgBgkQgCgbgJgfIAHgFIARgPQAXgXAPgeQAMgXALgXQAJgTAHgUQAEgMAKgnIAAAAQADAKAFAJQAVAnAjAeQAdAaAiAUIAXAMIAaAPQAIAFAGAHIAGAHIABACIABAAIACACIABABIgCgFIgCgNIgBgFIAAgGIAAgCIACAAQAOAWAMAYQAEAJAHAIIABAAIACACIAAAJIAAAHIAAABQAAAeADAeIAAADIAAADIABACIAAAFIAGA9IABAJIAAABIgJAZQgLAagNAaQgUAogeAhQgWAXg1AuIAAAAIgCABIgMAAIAAAAIgBAAgABQmcIACAAIAQACIgQgCIgCAAQgZgGAAgQQAAgGADgHQANgCAWgsIABgBIAAABIgBAAQgWAsgNACQgDAHAAAGQAAAQAZAGgABenuIAGgNIgGANgAAAorIAAABIAAAAIAAAAIACgBIABgDIgDADgACkjoIAAAAgAFRnoIAAAAIgDgZIgDgUIAAgFIgIg7IAAAAIAFgBQgCgbATAFQASAGAFArQAEAsgZAoIgJABIgBgCg");
	this.shape_39.setTransform(132.7,178.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FAEED3").s().p("AgtAAQgGAWgDAZIgDALIAAAAQgCAIgFAAQABgkASgegAA+g/QABgBAAAAQAAAAABAAQAAgBABAAQAAAAABABIgDABg");
	this.shape_40.setTransform(129.8,96.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B66616").s().p("AjuGGQAHgLAFgMQAIgSAEgUQAFgXABgYQADgqgCg6IAJARIABABIAKAOIANAPICVACIiVABIAAgBIAAgCIAAACIAAABIgHgJQgJgLgHgMQAHAMAJALIAHAJIAAAOQAAAogFApIgBACIgDAmIAAAAIgPALIAAgBIAAAAIACgKQAFgUABgUIABgBIAAgWQAAgPgBgPIgIhLIAIBLQABAPAAAPIAAAWIgBABQgBAUgFAUIgCAKIAAAAIAAABIgHAEQgPAKgMAOIAAAAQgCAAgEgQgAhgGGIgFABIgQgBIgIgBQgLgMgMgKIgMgJIgHgDIgQAMIADgmIABgCQAFgpAAgoIAAgOQApAnATAcQATAdAoAEIAGABQAMACANgDIACAAIAAAAIgBAAIgBAAIABAAIABAAIgHAZIgCAKIgCAIIgBAKIAAAJQg0gEgKAAgAEAF4QgNgEgNgFQgSgIgRgKIgHgEIgGgGIgDgMIgHgoIgJhPIgLhcIgCgQIgDgVIAKgBQAZgogFgqQgEgsgTgFQgSgFACAbIgGgHIgJAAIAAgIIgCgCIgBgBQgHgHgFgJQgLgYgOgWIgCgDIAAADIAAACIAAAFIAAAGIADANIACAFIgBgBIgDgCIAAAAIgBgCIgGgHQgGgHgIgGIgbgOIgWgNQgggTgdgaQgjgegWgnQgEgJgDgKIAAgBIAAABQgKAmgFANQgHAUgIATQgLAXgMAXQgQAegYAXIgSAPIgGAFQAIAfACAZIABAkIgGAAQAAALgCAIQgYgtgMgwIAAAAIAAAAQgWgjAFg4IAGg7IABgLQADgZAGgXQAcg1AmgpQAngoAmgKQAlgKAFAFQAFAFAigHQAhgGAogBQAqgCAjAYQAlAZAdAhQAcAgAVAkQATAgALAkQAKAdADAeQACAXgPCVIgEANQgKAqgHAuQgHAtAGAwQAGAvALAiQALAeAKAUIACAFIAJAQQgRgKgJgCgAkHgmIABgBQAMgFAMgHIAIgFIgEgOIgFgDQAOgSAMgUIAAgBIANgXIARgjQALgYAHgaIAAAAIAAAAQADgNAAgNQAAANgDANIAAAAIAAAAQgHAagLAYIgRAjIgNAXIAAABQgMAUgOASIgEAGIgUAdIAAAAgAjjh2QgGALgHAJIgDAFQAEAAADgCQAMgIAIgKIgLgFQAHgNAEgPIAFgSIABgFIAAAAIAAAAIgBAFIgFASQgEAPgHANIAAAAgAi8isQgEATgJASQgGAMgJAKQAJgKAGgMQAJgSAEgTQAHgYABgaQgBAagHAYgAibk4IABABIACgCIgBAAIgCABgACiF3IgGADIAAAAIgFgLIgJgWIgJgbIgLgfIgEgLQgBgEABhWIAAgNIAMghIABgDIAAgCIAGgBIAAACIAAADIAAADIAMBiQAEAZAGAZIAAAAIAAABQAEATAHATQADAKAGAJQgGgJgDgKQgHgTgEgTIAAgBIAAAAQgGgZgEgZIgMhiIAAgDIAAgDIAAgCIgCgNIgBgJIAAAAIgBgKIgGg8IgBgFIAAgCIAAgDIAAgEQgDgcAAgeIAKAAIAIA4IAAAFIADAVIADAZIAAAAIAAACIADAVIACAQIALBcIAJBPIAHAoIADAMIACAHIADAFQgCAKABAGIAAAAIAAADIADAGIgDAGQgFgEgTgDgAgWFMIAAAAgAiuDoIAAAAgACTBPIAAAAg");
	this.shape_41.setTransform(151.7,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_3}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},14).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_29},{t:this.shape_36},{t:this.shape_35},{t:this.shape_26},{t:this.shape_34}]},18).wait(69));

	// chair
	this.instance_4 = new lib.gchair("synched",0);
	this.instance_4.setTransform(148,306.4,1,1,0,0,0,73.4,110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-53,244.9,474);


// stage content:
(lib.threeCorrect_Canvas = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.UseWhatYouLearned();
	this.instance.setTransform(121.5,430.9,1,1,0,0,0,121.5,250.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(124.5,427,243.9,473.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;