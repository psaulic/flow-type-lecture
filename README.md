# flow-type-lecture

## Installation

We are going to assume that you are using yarn as a package manager and babel
to transpile your code. Flowtype integrates nicely with this common setup. Here's how to
add flow type to an existing project:
  1.  Add necessary dev dependencies:

  ```bash
  yarn add -D babel-cli babel-preset-flow flow-bin@latest
  ```

  2.  If you don't already have one, create a `.babelrc` file and add flow as a preset

  ```json
  {
    "presets": ["flow"]
  }
  ```

  If using webpack, the changes in `.babelrc` should take effect immediately, properly parsing your flow typed code.
  You may optionally install flow-webpack-plugin to enable type-checking errors during transpilation.

  3. Initialize flow in your project
  ```bash
  npx flow init
  ```
  This will create a `.flowconfig` file in your current directory. Here you can configure flow
  and pass in additional options.

  4. Add `// @flow` to the beginning of every file you want to use flow in. Optionally you could add `all=true` to the `[options]` section of your `.flowconfig`. This will enable flow to run on all files, even if they don't have the `// @flow` pragma. NOTE: If ussing `all=true`, flow will typecheck your dependencies as well, so you're either going to have to annotate untyped dependencies or ignore them, in which case flow will complain about not being able to resolve a module.

## Usage

  Believe it or not, just adding `// @flow` already provides some type safety, since flow has type inference, but to get the most out of it, you should annotate your files. It is often a good practice to plan our how your data is going to flow through your code and write explicit type definitions prior to their implementations.

  A good way to get introduced to flows type system is to read the official docs
  **[here](https://flow.org/en/docs/getting-started/)**

  On to the examples.
