// This is a generated file! Please edit godot.ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['kaitai-struct/KaitaiStream'], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory(require('kaitai-struct/KaitaiStream'));
    } else {
      root.GodotResource = factory(root.KaitaiStream);
    }
  }(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
  var GodotResource = (function() {
    function GodotResource(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
  
      this._read();
    }
    GodotResource.prototype._read = function() {
      this.hdr = new Header(this._io, this, this._root);
    }
  
    var Unicodestr = GodotResource.Unicodestr = (function() {
      function Unicodestr(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      Unicodestr.prototype._read = function() {
        this.size = this._io.readU4le();
        this.str = KaitaiStream.bytesToStr(this._io.readBytes(this.size), "utf-8");
      }
  
      return Unicodestr;
    })();
  
    var InternalResource = GodotResource.InternalResource = (function() {
      function InternalResource(_io, _parent, _root, i) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this.i = i;
  
        this._read();
      }
      InternalResource.prototype._read = function() {
        this.path = new Unicodestr(this._io, this, this._root);
        this.offset = this._io.readU8le();
      }
      Object.defineProperty(InternalResource.prototype, 'body', {
        get: function() {
          if (this._m_body !== undefined)
            return this._m_body;
          var _pos = this._io.pos;
          this._io.seek(this.offset);
          this._m_body = new InternalResourceReal(this._io, this, this._root);
          this._io.seek(_pos);
          return this._m_body;
        }
      });
      Object.defineProperty(InternalResource.prototype, 'isMain', {
        get: function() {
          if (this._m_isMain !== undefined)
            return this._m_isMain;
          this._m_isMain = this.i == (this._root.hdr.intResourcesSize - 1);
          return this._m_isMain;
        }
      });
  
      return InternalResource;
    })();
  
    var Getstring = GodotResource.Getstring = (function() {
      function Getstring(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      Getstring.prototype._read = function() {
        this.id = this._io.readU4le();
      }
      Object.defineProperty(Getstring.prototype, 'mapped', {
        get: function() {
          if (this._m_mapped !== undefined)
            return this._m_mapped;
          this._m_mapped = this._root.hdr.stringMap[this.id];
          return this._m_mapped;
        }
      });
  
      return Getstring;
    })();
  
    var Variant = GodotResource.Variant = (function() {
      Variant.Variant = Object.freeze({
        NIL: 1,
        BOOL: 2,
        INT: 3,
        FLOAT: 4,
        STRING: 5,
        VECTOR2: 10,
        RECT2: 11,
        VECTOR3: 12,
        PLANE: 13,
        QUATERNION: 14,
        AABB: 15,
        BASIS: 16,
        TRANSFORM3D: 17,
        TRANSFORM2D: 18,
        COLOR: 20,
        NODE_PATH: 22,
        RID: 23,
        OBJECT: 24,
        INPUT_EVENT: 25,
        DICTIONARY: 26,
        ARRAY: 30,
        PACKED_BYTE_ARRAY: 31,
        PACKED_INT32_ARRAY: 32,
        PACKED_FLOAT32_ARRAY: 33,
        PACKED_STRING_ARRAY: 34,
        PACKED_VECTOR3_ARRAY: 35,
        PACKED_COLOR_ARRAY: 36,
        PACKED_VECTOR2_ARRAY: 37,
        INT64: 40,
        DOUBLE: 41,
        CALLABLE: 42,
        SIGNAL: 43,
        STRING_NAME: 44,
        VECTOR2I: 45,
        RECT2I: 46,
        VECTOR3I: 47,
        PACKED_INT64_ARRAY: 48,
        PACKED_FLOAT64_ARRAY: 49,
        VECTOR4: 50,
        VECTOR4I: 51,
        PROJECTION: 52,
        PACKED_VECTOR4_ARRAY: 53,
  
        1: "NIL",
        2: "BOOL",
        3: "INT",
        4: "FLOAT",
        5: "STRING",
        10: "VECTOR2",
        11: "RECT2",
        12: "VECTOR3",
        13: "PLANE",
        14: "QUATERNION",
        15: "AABB",
        16: "BASIS",
        17: "TRANSFORM3D",
        18: "TRANSFORM2D",
        20: "COLOR",
        22: "NODE_PATH",
        23: "RID",
        24: "OBJECT",
        25: "INPUT_EVENT",
        26: "DICTIONARY",
        30: "ARRAY",
        31: "PACKED_BYTE_ARRAY",
        32: "PACKED_INT32_ARRAY",
        33: "PACKED_FLOAT32_ARRAY",
        34: "PACKED_STRING_ARRAY",
        35: "PACKED_VECTOR3_ARRAY",
        36: "PACKED_COLOR_ARRAY",
        37: "PACKED_VECTOR2_ARRAY",
        40: "INT64",
        41: "DOUBLE",
        42: "CALLABLE",
        43: "SIGNAL",
        44: "STRING_NAME",
        45: "VECTOR2I",
        46: "RECT2I",
        47: "VECTOR3I",
        48: "PACKED_INT64_ARRAY",
        49: "PACKED_FLOAT64_ARRAY",
        50: "VECTOR4",
        51: "VECTOR4I",
        52: "PROJECTION",
        53: "PACKED_VECTOR4_ARRAY",
      });
  
      function Variant(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      Variant.prototype._read = function() {
        this.type = this._io.readU4le();
        if (this.type == GodotResource.Variant.Variant.BOOL) {
          this.bool = this._io.readU4le();
        }
        if (this.type == GodotResource.Variant.Variant.INT) {
          this.int = this._io.readU4le();
        }
        if (this.type == GodotResource.Variant.Variant.FLOAT) {
          this.float = this._io.readF4le();
        }
        if (this.type == GodotResource.Variant.Variant.OBJECT) {
          this.obj = new Obj(this._io, this, this._root);
        }
        if (this.type == GodotResource.Variant.Variant.ARRAY) {
          this.array = new Array(this._io, this, this._root);
        }
        if (this.type == GodotResource.Variant.Variant.PACKED_BYTE_ARRAY) {
          this.packedByteArray = new PackedByteArray(this._io, this, this._root);
        }
        if (this.type == GodotResource.Variant.Variant.PACKED_INT64_ARRAY) {
          this.packedInt64Array = new PackedInt64Array(this._io, this, this._root);
        }
      }
  
      var ObjInternal = Variant.ObjInternal = (function() {
        function ObjInternal(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root || this;
  
          this._read();
        }
        ObjInternal.prototype._read = function() {
          this.index = this._io.readU4le();
        }
        Object.defineProperty(ObjInternal.prototype, 'resource', {
          get: function() {
            if (this._m_resource !== undefined)
              return this._m_resource;
            this._m_resource = this._root.hdr.internalResources[this.index];
            return this._m_resource;
          }
        });
  
        return ObjInternal;
      })();
  
      var Obj = Variant.Obj = (function() {
        Obj.Obj = Object.freeze({
          EMPTY: 0,
          EXTERNAL: 1,
          INTERNAL: 2,
          EXTERNAL_INDEX: 3,
  
          0: "EMPTY",
          1: "EXTERNAL",
          2: "INTERNAL",
          3: "EXTERNAL_INDEX",
        });
  
        function Obj(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root || this;
  
          this._read();
        }
        Obj.prototype._read = function() {
          this.objtype = this._io.readU4le();
          if (this.objtype == GodotResource.Variant.Obj.Obj.INTERNAL) {
            this.internal = new ObjInternal(this._io, this, this._root);
          }
        }
  
        return Obj;
      })();
  
      var Array = Variant.Array = (function() {
        function Array(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root || this;
  
          this._read();
        }
        Array.prototype._read = function() {
          this.length = this._io.readU4le();
          this.items = [];
          for (var i = 0; i < (this.length & 2147483647); i++) {
            this.items.push(new Variant(this._io, this, this._root));
          }
        }
  
        return Array;
      })();
  
      var PackedByteArray = Variant.PackedByteArray = (function() {
        function PackedByteArray(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root || this;
  
          this._read();
        }
        PackedByteArray.prototype._read = function() {
          this.length = this._io.readU4le();
          this.data = this._io.readBytes(this.length);
          if ((4 - KaitaiStream.mod(this.length, 4)) < 4) {
            this.padding = this._io.readBytes((4 - KaitaiStream.mod(this.length, 4)));
          }
        }
  
        return PackedByteArray;
      })();
  
      var PackedInt64Array = Variant.PackedInt64Array = (function() {
        function PackedInt64Array(_io, _parent, _root) {
          this._io = _io;
          this._parent = _parent;
          this._root = _root || this;
  
          this._read();
        }
        PackedInt64Array.prototype._read = function() {
          this.length = this._io.readU4le();
          this.data = [];
          for (var i = 0; i < this.length; i++) {
            this.data.push(this._io.readU8le());
          }
        }
  
        return PackedInt64Array;
      })();
  
      return Variant;
    })();
  
    var ExternalResource = GodotResource.ExternalResource = (function() {
      function ExternalResource(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      ExternalResource.prototype._read = function() {
        this.type = new Unicodestr(this._io, this, this._root);
        this.path = new Unicodestr(this._io, this, this._root);
        this.uid = this._io.readU8le();
      }
  
      return ExternalResource;
    })();
  
    var InternalResourceReal = GodotResource.InternalResourceReal = (function() {
      function InternalResourceReal(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      InternalResourceReal.prototype._read = function() {
        this.name = new Unicodestr(this._io, this, this._root);
        this.propertiesCount = this._io.readU4le();
        this.properties = [];
        for (var i = 0; i < this.propertiesCount; i++) {
          this.properties.push(new Property(this._io, this, this._root));
        }
      }
  
      return InternalResourceReal;
    })();
  
    var Header = GodotResource.Header = (function() {
      function Header(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      Header.prototype._read = function() {
        this.magic = this._io.readBytes(4);
        if (!((KaitaiStream.byteArrayCompare(this.magic, [82, 83, 82, 67]) == 0))) {
          throw new KaitaiStream.ValidationNotEqualError([82, 83, 82, 67], this.magic, this._io, "/types/header/seq/0");
        }
        this.bigEndian = this._io.readU4le();
        this.useReal64 = this._io.readU4le();
        this.verMajor = this._io.readU4le();
        this.verMinor = this._io.readU4le();
        this.verFormat = this._io.readU4le();
        this.type = new Unicodestr(this._io, this, this._root);
        this.importmdOfs = this._io.readU8le();
        this.flags = this._io.readU4le();
        this.uid = this._io.readU8le();
        if ((this.flags & 8) == 1) {
          this.scriptClass = new Unicodestr(this._io, this, this._root);
        }
        this.reservedFields = [];
        for (var i = 0; i < 11; i++) {
          this.reservedFields.push(this._io.readU4le());
        }
        this.stringTableSize = this._io.readU4le();
        this.stringMap = [];
        for (var i = 0; i < this.stringTableSize; i++) {
          this.stringMap.push(new Unicodestr(this._io, this, this._root));
        }
        this.extResourcesSize = this._io.readU4le();
        this.externalResources = [];
        for (var i = 0; i < this.extResourcesSize; i++) {
          this.externalResources.push(new ExternalResource(this._io, this, this._root));
        }
        this.intResourcesSize = this._io.readU4le();
        this.internalResources = [];
        for (var i = 0; i < this.intResourcesSize; i++) {
          this.internalResources.push(new InternalResource(this._io, this, this._root, i));
        }
      }
  
      return Header;
    })();
  
    var Property = GodotResource.Property = (function() {
      function Property(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
  
        this._read();
      }
      Property.prototype._read = function() {
        this.name = new Getstring(this._io, this, this._root);
        this.variant = new Variant(this._io, this, this._root);
      }
  
      return Property;
    })();
  
    return GodotResource;
  })();
  return GodotResource;
  }));
  