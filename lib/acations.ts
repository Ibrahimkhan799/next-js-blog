import { client } from "@/lib/sanity";

export async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      "slug" : slug.current,
      description,
      "thumbnail":thumbnail.asset._ref,
      _createdAt,
    }`;
  const data = await client.fetch(query);
  return data;
}

export async function getPostByProp(params: { prop: string; value: string }) {
  const query = `*[_type == 'blog' && ${params.prop} == '${params.value}']{
    _id,
    _createdAt,
    _updatedAt,
    title,
    content,
    description,
    "thumbnail" : thumbnail.asset._ref,
    "slug" : slug.current,
  }[0]`;
  const data = await client.fetch(query);
  return data;
}
