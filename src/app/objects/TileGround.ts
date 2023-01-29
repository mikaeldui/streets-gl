import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import {RendererTypes} from "~/lib/renderer/RendererTypes";
import {StaticTileGeometry} from "./Tile";
import Vec3 from "~/lib/math/Vec3";

export default class TileGround extends RenderableObject3D {
	public mesh: AbstractMesh = null;

	public constructor(private staticTileGeometry: StaticTileGeometry) {
		super();

		this.setBoundingBox(
			new Vec3(...staticTileGeometry.bboxGround.min),
			new Vec3(...staticTileGeometry.bboxGround.max)
		);
	}

	public isMeshReady(): boolean {
		return this.mesh !== null;
	}

	public updateMesh(renderer: AbstractRenderer): void {
		if (!this.mesh) {
			this.mesh = renderer.createMesh({
				indexed: true,
				indices: this.staticTileGeometry.ground.index,
				attributes: [
					renderer.createAttribute({
						name: 'position',
						size: 3,
						type: RendererTypes.AttributeType.Float32,
						format: RendererTypes.AttributeFormat.Float,
						normalized: false,
						data: this.staticTileGeometry.ground.position
					}),
					renderer.createAttribute({
						name: 'normal',
						size: 3,
						type:  RendererTypes.AttributeType.Float32,
						format: RendererTypes.AttributeFormat.Float,
						normalized: false,
						data: this.staticTileGeometry.ground.normal
					}),
					renderer.createAttribute({
						name: 'uv',
						size: 2,
						type:  RendererTypes.AttributeType.Float32,
						format: RendererTypes.AttributeFormat.Float,
						normalized: false,
						data: this.staticTileGeometry.ground.uv
					})
				]
			});
		}
	}

	public dispose(): void {
		if (this.mesh) {
			this.mesh.delete();
		}
	}
}