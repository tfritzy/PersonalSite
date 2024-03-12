<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import 'prismjs/components/prism-csharp'
import 'prismjs/themes/prism-tomorrow.css'
import PageHeader from '../../../components/PageHeader.vue'

const orientationCode =
  ref(`public static Point2Float GetItemPosOffset(float progress, HexSide input, HexSide output)
{
    var orientationCase = GetOrientationCase(input, output);
    switch (orientationCase)
    {
        case OrientationCase.Straight:
            Point2Float endPos = PortPositions[(int)output];
            Point2Float startPos = PortPositions[(int)input];
            return startPos + (endPos - startPos) * progress;
        case OrientationCase.CurvedAntiClockwise:
        case OrientationCase.CurvedClockwise:
            bool clockwise = orientationCase == OrientationCase.CurvedClockwise;
            HexSide centerOffset = GridHelpers.Rotate60(input, clockwise: clockwise);
            Point2Int centerPoint = GridHelpers.GetNeighbor(Point2Int.Zero, centerOffset);
            Point2Float center = GridHelpers.evenr_offset_to_pixel(centerPoint);
            Point2Int neighborInInputDir = GridHelpers.GetNeighbor(Point2Int.Zero, input);
            Point2Int neighborInOutputDir = GridHelpers.GetNeighbor(Point2Int.Zero, output);
            Point2Float inputVector = GridHelpers.evenr_offset_to_pixel(neighborInInputDir);
            Point2Float outputVector = GridHelpers.evenr_offset_to_pixel(neighborInOutputDir);
            Point2Float inputNormal = clockwise ? new(-inputVector.y, inputVector.x) : new(inputVector.y, -inputVector.x);
            Point2Float outputNormal = clockwise ? new(outputVector.y, -outputVector.x) : new(-outputVector.y, outputVector.x);
            float startAngle = MathF.Atan2(inputNormal.y, inputNormal.x) / Constants.RAD_TO_DEG;
            float endAngle = MathF.Atan2(outputNormal.y, outputNormal.x) / Constants.RAD_TO_DEG;
            Point2Float circlePoint = GetPointOnCircle(progress, startAngle, endAngle, clockwise);
            return circlePoint + center;
    }

    return new Point2Float();
}`)
</script>

<template>
  <div>
    <PageHeader title="Smooth Items" date="Mar 12, 2024" />

    <p>
      I've mostly been continuing to work on multiplayer for the past month, getting all the
      different types of updates flowing. I took a minor detour to make items move smoothly around
      corners though, which is this update.
    </p>

    <br />

    <p>
      The way I accomplished this is by defining a point offset from the center of the hex the
      curved conveyor is on, and using unit circle math to calculate the position of the item.
    </p>

    <img class="rounded-md" src="./note.jpg" width="350" height="500" />

    <br />

    <pre class="language-csharp"><code>{{orientationCode}}</code></pre>

    <br />

    <video width="600" controls class="rounded-md">
      <source src="./CurveMovie.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <br />
    <br />
    <br />
  </div>
</template>
