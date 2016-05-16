function extendObject(oTarget, oExtend){
  var sPropertyName = "";
  if (!oTarget){
    throw window.Error("oTarget must be given.")
  }
  for(sPropertyName in oExtend){
    oTarget[sPropertyName] = oExtend[sPropertyName];
  }
  return oTarget;
}

function inherit(sClassName, oParentConstructor, oMembers){
  var fClass = function(){
    extendObject(this, oMembers);
  };

  if(sClassName){
    Object.defineProperty(fClass, "name", {value:sClassName});
  }

  if (oParentConstructor){
    fClass.prototype = new oParentConstructor();
  }
  fClass.prototype.constructor = fClass;

  return fClass;
}

function defineClass(sClassName,
                     oParentConstructor,
                     oMembers,
                     oMethod,
                     oStaticMethod){
    var fClass = inherit(sClassName, oParentConstructor, oMembers);

    if(oMethod){
      extendObject(fClass.prototype, oMethod);
    }

    if (oStaticMethod){
      extendObject(fClass, oStaticMethod);
    }
    return fClass;
}
