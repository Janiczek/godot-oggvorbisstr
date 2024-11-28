meta:
  id: godot_resource
  endian: le
seq:
  - id: hdr
    type: header
types:
  header:
    seq:
      - id: magic
        contents: RSRC
      - id: big_endian
        type: u4
      - id: use_real64
        type: u4
      - id: ver_major
        type: u4
      - id: ver_minor
        type: u4
      - id: ver_format
        type: u4
      - id: type
        type: unicodestr
      - id: importmd_ofs
        type: u8
      - id: flags
        type: u4
      - id: uid
        type: u8
      - id: script_class
        type: unicodestr
        if: flags & 8 == 1 # FORMAT_FLAG_HAS_SCRIPT_CLASS
      - id: reserved_fields
        type: u4
        repeat: expr
        repeat-expr: 11 # RESERVED_FIELDS
      - id: string_table_size
        type: u4
      - id: string_map
        type: unicodestr
        repeat: expr
        repeat-expr: string_table_size
      - id: ext_resources_size
        type: u4
      - id: external_resources
        type: external_resource
        repeat: expr
        repeat-expr: ext_resources_size
      - id: int_resources_size
        type: u4
      - id: internal_resources
        type: internal_resource(_index)
        repeat: expr
        repeat-expr: int_resources_size
  external_resource:
    seq:
      - id: type
        type: unicodestr
      - id: path
        type: unicodestr
      - id: uid
        type: u8
  internal_resource:
    params:
      - id: i
        type: u4
    seq:
      - id: path
        type: unicodestr
      - id: offset
        type: u8
    instances:
      body:
        pos: offset
        type: internal_resource_real
      is_main:
        value: i == _root.hdr.int_resources_size - 1
  internal_resource_real:
    seq:
      - id: name
        type: unicodestr
      - id: properties_count
        type: u4
      - id: properties
        type: property
        repeat: expr
        repeat-expr: properties_count
  property:
    seq:
      - id: name
        type: getstring
      - id: variant
        type: variant
  unicodestr:
    seq:
      - id: size
        type: u4
      - id: str
        type: str
        size: size
        encoding: utf-8
  getstring:
    seq:
      - id: id
        type: u4
    instances:
      mapped:
        value: _root.hdr.string_map[id]
  variant:
    seq:
      - id: type
        type: u4
        enum: variant
      - id: bool
        type: u4
        if: type == variant::bool
      - id: int
        type: u4
        if: type == variant::int
      - id: float
        type: f4
        if: type == variant::float
      # TODO rest
      - id: obj
        type: obj
        if: type == variant::object
      - id: array
        type: array
        if: type == variant::array
      - id: packed_byte_array
        type: packed_byte_array
        if: type == variant::packed_byte_array
      - id: packed_int64_array
        type: packed_int64_array
        if: type == variant::packed_int64_array
    types:
      array:
        seq:
          - id: length
            type: u4
          - id: items
            type: variant
            repeat: expr
            repeat-expr: length & 0x7fffffff
      packed_byte_array:
        seq:
          - id: length
            type: u4
          - id: data
            size: length
          - id: padding
            size: 4 - (length % 4)
            if: (4 - (length % 4)) < 4
      packed_int64_array:
        seq:
          - id: length
            type: u4
          - id: data
            type: u8
            repeat: expr
            repeat-expr: length
      obj:
        seq:
          - id: objtype
            type: u4
            enum: obj
          - id: internal
            if: objtype == obj::internal
            type: obj_internal
          # TODO rest
        enums:
          obj:
            0: empty
            1: external
            2: internal
            3: external_index
      obj_internal:
        seq:
          - id: index
            type: u4
        instances:
          resource:
            value: _root.hdr.internal_resources[index]
    enums:
      variant:
        1: nil
        2: bool
        3: int
        4: float
        5: string
        10: vector2
        11: rect2
        12: vector3
        13: plane
        14: quaternion
        15: aabb
        16: basis
        17: transform3d
        18: transform2d
        20: color
        22: node_path
        23: rid
        24: object
        25: input_event
        26: dictionary
        30: array
        31: packed_byte_array
        32: packed_int32_array
        33: packed_float32_array
        34: packed_string_array
        35: packed_vector3_array
        36: packed_color_array
        37: packed_vector2_array
        40: int64
        41: double
        42: callable
        43: signal
        44: string_name
        45: vector2i
        46: rect2i
        47: vector3i
        48: packed_int64_array
        49: packed_float64_array
        50: vector4
        51: vector4i
        52: projection
        53: packed_vector4_array
