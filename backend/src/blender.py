import bpy

# 초기화
bpy.ops.wm.read_factory_settings(use_empty=True)

# PLY 파일 불러오기
file_path = "output2/model.ply"
bpy.ops.import_mesh.ply(filepath=file_path)

# 메쉬 변환
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.delaunay_triangulate()
bpy.ops.object.mode_set(mode='OBJECT')

# UV 맵 생성 및 텍스처 추가
obj = bpy.context.active_object
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.unwrap(method='ANGLE_BASED')
bpy.ops.object.mode_set(mode='OBJECT')

material = bpy.data.materials.new(name="TextureMaterial")
material.use_nodes = True
bsdf = material.node_tree.nodes["Principled BSDF"]
tex_image = material.node_tree.nodes.new('ShaderNodeTexImage')
tex_image.image = bpy.data.images.load("/path/to/your_texture.png")
material.node_tree.links.new(bsdf.inputs['Base Color'], tex_image.outputs['Color'])

if obj.data.materials:
    obj.data.materials[0] = material
else:
    obj.data.materials.append(material)

# 카메라 및 렌더링 설정
bpy.context.scene.camera.location = (0, -3, 3)
bpy.context.scene.camera.rotation_euler = (1.109, 0, 0.785)
bpy.context.scene.render.filepath = "/path/to/output_image.png"

bpy.ops.render.render(write_still=True)
