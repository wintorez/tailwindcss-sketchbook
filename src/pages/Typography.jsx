export function Typography() {
  return (
    <div className="prose">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      {['prose-sm', 'prose-base', 'prose-lg', 'prose-xl', 'prose-2xl'].map(
        (each) => (
          <article key={each} className={`${each} my-10`}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p>
              Maecenas libero magna, placerat eget eros vel, venenatis gravida
              enim. Sed commodo sit amet lectus eu pretium. Sed in ante
              tincidunt sem aliquet iaculis eu quis eros. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Nulla facilisi. Maecenas imperdiet elit vitae massa
              eleifend pretium. Phasellus vehicula mi tellus, auctor elementum
              eros blandit vitae. In eget ex vel nunc pretium finibus quis nec
              urna. Phasellus tincidunt condimentum urna, eu rhoncus erat. Cras
              ut justo venenatis ante rutrum lacinia id et leo.
            </p>
            <p>
              Duis ultricies cursus dolor, ut bibendum dolor. Curabitur eros
              nibh, fermentum quis ultrices id, finibus id ipsum. Etiam cursus
              elit turpis, eget vehicula nunc faucibus ut. Donec mollis eleifend
              molestie. Fusce augue neque, semper in dignissim sit amet,
              imperdiet eu sem. Curabitur accumsan libero odio, non sodales
              tortor gravida sed. Morbi non tincidunt est. Vivamus ornare
              elementum eros in egestas. Phasellus id lacus dignissim, faucibus
              diam in, gravida neque. Ut id aliquam purus, eget egestas ligula.
              Praesent sem libero, ullamcorper nec est vel, aliquam feugiat
              arcu. Sed vehicula lacus quis ex faucibus euismod. In ut ipsum
              bibendum, efficitur felis eget, tincidunt ante.
            </p>
          </article>
        )
      )}
    </div>
  )
}
