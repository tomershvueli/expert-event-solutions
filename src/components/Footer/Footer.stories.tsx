import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";

// Default export
export default {
  title: "components/Footer",
  component: Footer,
  argTypes: {
    screenWidth: {
      control: {
        type: "select",
        options: ["mobile", "desktop"], // Add more if needed
      },
    },
  },
} as Meta;

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

// Template for the Footer component
const Template: StoryFn = (args) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Footer {...args} />
      </BrowserRouter>
    </ApolloProvider>
  );
};

// Default story for the Footer
export const FooterComponent = Template.bind({});
FooterComponent.args = {
  screenWidth: "desktop", // Set a default value for the screenWidth
};
