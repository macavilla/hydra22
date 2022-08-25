const hydra = new Hydra({ detectAudio: false })

solid(1, .4, .4)
    .add(
        shape(99, .14, .17)
            .modulate(
                noise(1000).scroll(
                    ({ time }) => .05 * Math.SQRT1_2(time) + .2 * Math.cos(-time),
                    ({ time }) => .05 * Math.sin(time) + .2 * Math.cos(time))

            )

            .color(.7, .3, .3)

    )
    .out()