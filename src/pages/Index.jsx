import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Image, Stack, Flex, Spacer, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [knowledgeBase, setKnowledgeBase] = useState([
    {
      id: 1,
      title: "Onboarding Process",
      content: "Step 1: Welcome email\nStep 2: Office tour\nStep 3: Team introductions",
    },
    {
      id: 2,
      title: "Sales Best Practices",
      content: "- Listen actively\n- Identify customer needs\n- Present solutions\n- Handle objections\n- Close the deal",
    },
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });

  const handleSearch = () => {
    // Perform search logic here
    console.log(`Searching for: ${query}`);
  };

  const handleNewArticleSubmit = () => {
    setKnowledgeBase([...knowledgeBase, { ...newArticle, id: Date.now() }]);
    setNewArticle({ title: "", content: "" });
    onClose();
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTExMjA4NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" boxSize="50px" mr={4} />
        <Heading as="h1" size="xl">
          Knowledge Management System
        </Heading>
        <Spacer />
        <IconButton icon={<FaPlus />} onClick={onOpen} aria-label="Add article" />
      </Flex>

      <Stack spacing={4} mb={8}>
        <Flex>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search knowledge base..." mr={4} />
          <Button onClick={handleSearch} leftIcon={<FaSearch />}>
            Search
          </Button>
        </Flex>
      </Stack>

      <Stack spacing={8}>
        {knowledgeBase.map((article) => (
          <Box key={article.id} p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg" mb={2}>
              {article.title}
            </Heading>
            <Text whiteSpace="pre-wrap">{article.content}</Text>
          </Box>
        ))}
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Content</FormLabel>
              <Textarea value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })} />
            </FormControl>
            <Button onClick={handleNewArticleSubmit} colorScheme="blue">
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
