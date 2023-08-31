/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';

export default function TextBox({
  description,
}) {
  return (
    <Box sx={styles.card}>
      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
};
