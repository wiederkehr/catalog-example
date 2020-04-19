webpackJsonp([0],{780:function(n,o,t){var e=t(15),a=t(45),i=t(293).PageRenderer;i.__esModule&&(i=i.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(781)}},componentWillMount:function(){},render:function(){return e.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s},781:function(n,o){n.exports='# Publish Catalog on Github Pages\n\nExample for creating and publishing an instance of [Catalog](https://catalog.style/) using [Github Pages](https://pages.github.com/).\n\n## 1. Install Catalog\n\n1. Create a new Catalog following these [instructions](https://docs.catalog.style/installation/create-catalog).\n2. Create a new repository on Github following these [instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).\n3. Add your Catalog code to the new repository following these [instructions](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line).\n\nFor more details about how to use Catalog, check out the [documentation](https://docs.catalog.style/).\n\n## 2. Configure Github Pages\n\n1. Setup Github Pages on the `Settings` page of your Github repository.\n2. Select the `/doc` folder of the `master` branch as the source for your Github Pages.\n\n```image\nplain: true\nspan: 4\nsrc: "/github-pages-source.png"\n```\n\n## 3. Publish to Github Pages\n\n### Option 1: Publish Catalog Manually\n\nYou can build Catalog locally and then publish a new version manually whenever you\u2019re ready.\n\n1. Build your Catalog locally using the script `catalog-build --public-url=/[your-repo-name]/ --out=docs`.\n2. Push the code changes to your repository on Github.\n3. Navigate to `https://[your-username].github.io/[your-repo-name]/` to see your new Catalog in full bloom.\n\n### Option 2: Publish Catalog Automatically\n\nAlternatively, you can build Catalog automatically whenever you push changes to your repository using [Github Actions](https://github.com/features/actions).\n\n1. Setup a new workflow on the `Actions` page of your Github repository.\n2. Skip the template selection and set up a fresh workflow for yourself.\n3. Give your workflow a descriptive name (i.e. `build-and-deploy-catalog.yml`).\n4. Copy and paste the following workflow.\n5. Save the workflow with _Start commit_ to commit the workflow file to your repository.\n6. Navigate to `Actions` page of your repository to see your new workflow listed.\n7. Make and commit a code change to your Catalog to see your publication workflow in action).\n8. From now on, every new code change that you push to the `master` branch will publish a new version of Catalog.\n\n#### Workflow\n\n```javascript\nname: Build and Deploy Catalog\n\non: [push]\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v2\n    - name: Use Node.js\n      uses: actions/setup-node@v1\n      with:\n        node-version: \'12.x\'\n    - name: Install Catalog\n      run: yarn\n    - name: Set Environment Variable for Repository Name\n      run:   echo ::set-env name=REPOSITORY_NAME::$(echo "$GITHUB_REPOSITORY" | awk -F / \'{print $2}\' | sed -e "s/:refs//")\n      shell: bash\n    - name: Echo Repository Name\n      run:   echo "$REPOSITORY_NAME"\n      shell: bash\n    - name: Build Catalog\n      run: yarn catalog-build --public-url=/"$REPOSITORY_NAME"/ --out=docs\n    - name: Commit Changes\n      uses: elstudio/actions-js-build/commit@v3\n      with:\n        commitMessage: Build Catalog\n```\n'}});
//# sourceMappingURL=0.e888c194.chunk.js.map